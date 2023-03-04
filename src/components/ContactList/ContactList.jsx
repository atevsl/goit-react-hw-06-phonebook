import React from 'react';
import {
  ListStyled,
  ListItemStyled,
  ContactTextStyled,
  ContactListHeader,
  ContactListBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactList,
  removeContact,
} from '../../redux/features/contactListSlice';
import { getFilter } from '../../redux/features/filterSlice';

const ContactList = () => {
  const contactList = useSelector(getContactList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contactList?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactListHeader>Contacts:</ContactListHeader>
      <ListStyled>
        {filteredContacts.map(contact => {
          return (
            <ListItemStyled key={contact.id}>
              <ContactTextStyled>
                {contact.name}: {contact.number}
              </ContactTextStyled>
              <ContactListBtn
                type="button"
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </ContactListBtn>
            </ListItemStyled>
          );
        })}
      </ListStyled>
    </>
  );
};

export default ContactList;
