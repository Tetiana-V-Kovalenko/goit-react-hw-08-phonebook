import Appbar from './Appbar/Appbar';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { getCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './Appbar/PrivateRoute';
import RestrictedRoute from './Appbar/RestrictedRoute';
import { ChakraProvider } from '@chakra-ui/react';

const Main = lazy(() => import('../Page/Main'));
const RegisterForm = lazy(() => import('../Page/RegisterForm'));
const LoginForm = lazy(() => import('../Page/LoginForm'));
const UserContacts = lazy(() => import('../Page/UserContacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Appbar />}>
          {' '}
          <Route index element={<Main />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<UserContacts />} />
            }
          />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};
