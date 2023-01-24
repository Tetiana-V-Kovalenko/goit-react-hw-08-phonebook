import css from './Contacts.module.css';
import PropTypes from 'prop-types';

import { fetchContacts, deleteContact } from 'redux/contactsOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';

const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  const filter = useSelector(state => state.filter.filter);
  const filterArr = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onClickDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      )}
      {error && <h2> An error occured {error}</h2>}

      {items.length === 0 ? (
        <p style={{ marginLeft: '30px' }}>There are no contact</p>
      ) : filter !== '' ? (
        filterArr.map(({ name, id, number }) => {
          return (
            <li key={id} className={css.contactItem}>
              <p>
                {name} : {number}
              </p>
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => onClickDeleteContact(id)}
              >
                X
              </button>
            </li>
          );
        })
      ) : (
        items.map(({ name, id, number }) => {
          return (
            <li key={id} className={css.contactItem}>
              <p>
                {name} : {number}
              </p>
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => onClickDeleteContact(id)}
              >
                X
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
