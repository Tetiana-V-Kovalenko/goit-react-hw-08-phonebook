import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
          required
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          pattern="^.{7,}$"
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
export default RegisterForm;
