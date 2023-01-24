import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
