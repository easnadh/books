import { Route, Routes } from 'react-router-dom';
import { routes } from './list.ts';
import { Layout } from '../layout/Layout.tsx';

export const Router = () => {
  // const isAuth = true;

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            path={route.path}
            key={`route ${route.element}`}
            element={<Layout children={<route.element />} />}
          />
        );
      })}
    </Routes>
  );
};
