import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
