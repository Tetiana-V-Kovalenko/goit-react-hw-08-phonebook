import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

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
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          name="email"
          value={email}
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
          onChange={handleChange}
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
export default LoginForm;
