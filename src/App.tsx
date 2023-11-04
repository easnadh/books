import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router.tsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase.ts';
import { Loader } from '@/components/Loader/Loader.tsx';

function App() {
  const [, loading] = useAuthState(auth);
  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
