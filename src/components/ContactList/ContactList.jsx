import React from 'react';
import PropTypes from 'prop-types';
import {
  ListStyled,
  ListItemStyled,
  ContactTextStyled,
  ContactListHeader,
  ContactListBtn,
} from './ContactList.styled';

class ContactList extends React.Component {
  render() {
    return (
      <>
        <ContactListHeader>Contacts:</ContactListHeader>
        <ListStyled>
          {this.props.filteredContacts.map(contact => {
            return (
              <ListItemStyled key={contact.id}>
                <ContactTextStyled>
                  {contact.name}: {contact.number}
                </ContactTextStyled>
                <ContactListBtn
                  type="button"
                  onClick={() => this.props.deleteItem(contact.id)}
                >
                  Delete
                </ContactListBtn>
              </ListItemStyled>
            );
          })}
        </ListStyled>
      </>
    );
  }
}

ContactList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
