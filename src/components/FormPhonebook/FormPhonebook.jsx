import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './FormPhonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { nanoid } from 'nanoid';

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
    <form onSubmit={onSubmitAddContact} className={css.form}>
      <label className={css.inputPhonebook}>
        Name:
        <input
          onChange={saveData}
          value={nameContact}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.inputPhonebook}>
        Number:
        <input
          onChange={saveData}
          value={numberContact}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btnAddContact} type="submit">
        Add contact
      </button>
    </form>
  );
};

FormPhonebook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default FormPhonebook;
