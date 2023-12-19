import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase.ts';

export const useAuth = () => {
  const [user, loading] = useAuthState(auth);
  const logOut = () => {
    auth.signOut();
  };
  return { user, loading, logOut };
};
