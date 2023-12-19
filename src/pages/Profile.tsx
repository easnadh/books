import { LOGIN_ROUTE } from '@/routes/paths.ts';
import { Navigate } from 'react-router-dom';
import { Information } from '@/components/User/Information.tsx';
import { Bookmarks } from '@/components/User/Bookmarks.tsx';
import { useAuth } from '@/hooks/useAuth.ts';

export const Profile = () => {
  const { user } = useAuth();
  return user ? (
    <>
      <Information user={user} />
      <Bookmarks uid={user.uid} />
    </>
  ) : (
    <Navigate to={LOGIN_ROUTE} />
  );
};
