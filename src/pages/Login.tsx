import { Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase.ts';
import { HOME_ROUTE } from '@/routes/paths.ts';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    if (user) {
      navigate(`${HOME_ROUTE}`);
    }
  };

  return (
    <>
      <Button variant='outlined' onClick={handleGoogle}>
        Войти с помощью Google
      </Button>
    </>
  );
};
