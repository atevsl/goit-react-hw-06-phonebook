import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContactList } from 'redux/features/contactListSlice';
import {
  FormStyled,
  ButtonStyled,
  InputStyled,
  LabelStyled,
  Headers,
} from './ContactForm.Styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactList = useSelector(getContactList);

  const onNameChange = e => {
    setName(e.currentTarget.value);
  };

  const onNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const onSubmitHendler = e => {
    e.preventDefault();

    if (
      contactList.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`name: ${name}, is already in contacts`);
      return;
    } else if (contactList.some(contact => contact.number === number)) {
      alert(`number: ${number}, is already in contacts`);
      return;
    } else {
      dispatch(addContact({ id: shortid.generate(), name, number }));
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <Headers>Phonebook</Headers>
      <FormStyled onSubmit={onSubmitHendler}>
        <LabelStyled htmlFor="name">
          <span>Name:</span>
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onNameChange}
          />
        </LabelStyled>
        <LabelStyled htmlFor="number">
          <span>Number:</span>
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onNumberChange}
          ></InputStyled>
        </LabelStyled>

        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </>
  );
};

export default ContactForm;
