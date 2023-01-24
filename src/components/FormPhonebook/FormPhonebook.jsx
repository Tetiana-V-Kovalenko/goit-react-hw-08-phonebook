import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { nanoid } from 'nanoid';
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from '@chakra-ui/react';

const FormPhonebook = () => {
  const [nameContact, setNameContact] = useState('');
  const [numberContact, setNumberContact] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const saveData = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setNameContact(e.currentTarget.value);
        break;
      case 'number':
        setNumberContact(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const onSubmitAddContact = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === nameContact)) {
      alert(`${nameContact} is already in contacts`);
      setNameContact('');
      setNumberContact('');
      return;
    }
    const contact = {
      name: nameContact,
      number: numberContact,
      id: nanoid(),
    };
    dispatch(addContact(contact));
    setNameContact('');
    setNumberContact('');
  };

  return (
    <FormControl
      onSubmit={onSubmitAddContact}
      autoComplete="off"
      as="form"
      w="40%"
      m="60px auto 0px"
      align="center"
    >
      <Heading>Phonebook</Heading>
      <FormLabel>Name</FormLabel>
      <Input
        isInvalid={nameContact === ''}
        onChange={saveData}
        value={nameContact}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        isRequired
      />
      <FormLabel>Number </FormLabel>
      <Input
        isInvalid={numberContact === ''}
        onChange={saveData}
        value={numberContact}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        isRequired
      />
      <Button mt={4} colorScheme="teal" type="submit">
        Add contact
      </Button>
    </FormControl>
  );
};

FormPhonebook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default FormPhonebook;
