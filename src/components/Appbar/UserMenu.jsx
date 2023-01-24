import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Text, Button, Flex } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <Flex align="center">
      {' '}
      <Text fontSize="xl" fontWeight="bold" mr="10px">
        {email}
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
export default UserMenu;
