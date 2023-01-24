import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Contacts/Filter';
import FormPhonebook from 'components/FormPhonebook/FormPhonebook';
import { useSelector } from 'react-redux';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const UserContacts = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <main>
          <FormPhonebook />
          <Box w="40%" m="60px auto 0px">
            <Heading as="h2" textAlign="center" mb="10px">
              Contacts
            </Heading>
            <Filter />
            <Contacts />
          </Box>
        </main>
      ) : (
        <p>Please Authozate</p>
      )}
    </>
  );
};
UserContacts.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default UserContacts;
