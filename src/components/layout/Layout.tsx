import { Header } from './Header/Header.tsx';
import React from 'react';
import { Container } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
