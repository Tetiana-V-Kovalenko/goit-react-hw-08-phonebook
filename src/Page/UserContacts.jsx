import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Contacts/Filter';
import FormPhonebook from 'components/FormPhonebook/FormPhonebook';
import { useSelector } from 'react-redux';

const UserContacts = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <main>
          <h1 style={{ marginLeft: '50px' }}>Phonebook</h1>
          <FormPhonebook />
          <h2 style={{ marginLeft: '50px' }}>Contacts</h2>

          <Filter />
          <Contacts />
        </main>
      ) : (
        <p>Please Authozate</p>
      )}
    </>
  );
};
export default UserContacts;
