import { Login } from '../../pages/Login.tsx';
import { Home } from '../../pages/Home.tsx';
import { Profile } from '../../pages/Profile.tsx';

export const routes = [
  {
    path: '/', // search books
    element: Home,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/:id',
    element: Profile,
  },
];
