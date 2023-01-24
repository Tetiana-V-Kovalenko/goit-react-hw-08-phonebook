import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>{' '}
    </>
  );
};
export default Navigation;
