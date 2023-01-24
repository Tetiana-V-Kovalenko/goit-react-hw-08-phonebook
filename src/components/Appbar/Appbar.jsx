import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { Flex, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Appbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Flex as="header" align="center" justify="space-between" m="5px 10px 0px">
        <Flex gap="15px">
          <Link as={NavLink} to={'/'} fontSize="larger">
            Main
          </Link>
          {isLoggedIn && (
            <Link as={NavLink} to={'/contacts'} fontSize="larger">
              Your contacts
            </Link>
          )}
        </Flex>

        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </Flex>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
Appbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default Appbar;
