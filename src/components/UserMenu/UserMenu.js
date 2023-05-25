import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/UseAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <Link to={'/'} onClick={() => dispatch(logOut())}>
        Logout
      </Link>
    </div>
  );
};
