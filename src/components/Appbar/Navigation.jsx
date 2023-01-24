import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Flex fontSize="larger" gap="30px">
      <Link as={NavLink} to="/register">
        Registration
      </Link>
      <Link as={NavLink} to="/login">
        Login
      </Link>{' '}
    </Flex>
  );
};
export default Navigation;
