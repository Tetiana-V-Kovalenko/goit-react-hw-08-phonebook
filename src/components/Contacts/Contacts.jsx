import PropTypes from 'prop-types';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {
  Text,
  Button,
  ListItem,
  ListIcon,
  Heading,
  UnorderedList,
} from '@chakra-ui/react';
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
    <UnorderedList>
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
      {error && <Heading as="h2"> An error occured {error}</Heading>}
      {items.length === 0 ? (
        <Text>There are no contact</Text>
      ) : filter !== '' ? (
        filterArr.map(({ name, id, number }) => {
          return (
            <ListItem
              key={id}
              display="flex"
              gap="15px"
              alignItems="center"
              marginBottom="10px"
            >
              <ListIcon as={BsFillTelephoneFill} color="teal" />
              <Text as="span" fontSize="large">
                {name} : {number}
              </Text>
              <Button
                type="button"
                colorScheme="teal"
                h="30px"
                onClick={() => onClickDeleteContact(id)}
              >
                X
              </Button>
            </ListItem>
          );
        })
      ) : (
        items.map(({ name, id, number }) => {
          return (
            <ListItem
              key={id}
              display="flex"
              gap="15px"
              alignItems="center"
              marginBottom="10px"
            >
              <ListIcon as={BsFillTelephoneFill} color="teal" />
              <Text as="span" fontSize="large">
                {name} : {number}
              </Text>
              <Button
                colorScheme="teal"
                h="30px"
                type="button"
                onClick={() => onClickDeleteContact(id)}
              >
                X
              </Button>
            </ListItem>
          );
        })
      )}
    </UnorderedList>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
