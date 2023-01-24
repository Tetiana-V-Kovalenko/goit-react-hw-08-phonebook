import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <FormControl
      onSubmit={handleSubmit}
      autoComplete="off"
      as="form"
      w="40%"
      m="60px auto 0px"
      align="center"
    >
      <FormLabel>Email</FormLabel>
      <Input
        isInvalid={email === ''}
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        isRequired
        placeholder="Exaple: User@mail.com"
      />

      <FormLabel>Password </FormLabel>
      <Input
        isInvalid={password === ''}
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        pattern="^.{7,}$"
        isRequired
        placeholder="Passwords must be at least 7 characters"
      />

      <Button mt={4} colorScheme="teal" type="submit">
        Login
      </Button>
    </FormControl>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};
export default LoginForm;
