import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const Appbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <header>
        <NavLink to={'/'}>Main</NavLink>
        {isLoggedIn && <NavLink to={'/contacts'}>Your contacts</NavLink>}

        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Appbar;
