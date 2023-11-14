import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase.ts';
import { Avatar } from '@mui/material';
import { LOGIN_ROUTE } from '@/routes/paths.ts';
import { Navigate } from 'react-router-dom';

export const Profile = () => {
  const [user] = useAuthState(auth);
  return user ? (
    <>
      <div>
        <div>@{user?.uid}</div>
        <div>{user?.displayName}</div>
        <Avatar
          style={{ height: 100, width: 100 }}
          variant='rounded'
          src={`${user?.photoURL}`}
          alt={`${user} profile picture`}
        />
      </div>
      <div>My books: </div>
    </>
  ) : (
    <Navigate to={LOGIN_ROUTE} />
  );
};
