import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import PropTypes from 'prop-types';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setEmail('');
    setName('');
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
      <FormLabel>Name</FormLabel>
      <Input
        isInvalid={name === ''}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        isRequired
        placeholder="Name"
        onChange={handleChange}
      />
      {name === '' && <FormErrorMessage>Name is required.</FormErrorMessage>}

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
      {email === '' && <FormErrorMessage>Email is required.</FormErrorMessage>}
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
      {password === '' && (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
      <Button mt={4} colorScheme="teal" type="submit">
        Create account
      </Button>
    </FormControl>
  );
};
RegisterForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};
export default RegisterForm;
