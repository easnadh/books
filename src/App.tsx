import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router.tsx';
import { Loader } from '@/styles/Loader/Loader.tsx';
import { useAuth } from '@/hooks/useAuth.ts';

function App() {
  const { loading } = useAuth();
  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
