import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from './paths.ts';
import { Login } from '@/pages/Login.tsx';
import { Home } from '@/pages/Home.tsx';
import { Profile } from '@/pages/Profile.tsx';

export const routes = [
  {
    path: HOME_ROUTE, // search books
    element: Home,
  },
  {
    path: LOGIN_ROUTE,
    element: Login,
  },
  {
    path: PROFILE_ROUTE,
    element: Profile,
  },
];
