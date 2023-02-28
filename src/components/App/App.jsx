import { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(newContact.name + ' is already in contacts');
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const filterHendler = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteItem = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ContactForm onSubmit={addContact} />
      {contacts.length === 0 ? (
        <p>there are no contacts</p>
      ) : (
        <>
          <Filter onInputHendler={filterHendler}></Filter>
          <ContactList
            deleteItem={deleteItem}
            filteredContacts={showFilteredContacts()}
          ></ContactList>
        </>
      )}
    </div>
  );
};

export default App;
