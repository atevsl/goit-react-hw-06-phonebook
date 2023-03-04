import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { getContactList } from '../../redux/features/contactListSlice';
import { useSelector } from 'react-redux';

const App = () => {
  const contactList = useSelector(getContactList);

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
      <ContactForm />
      {contactList.length === 0 ? (
        <p>There are no contacts</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
