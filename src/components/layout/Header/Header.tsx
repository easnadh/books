import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { Logo } from '@/components/layout/Header/Logo.tsx';
import { User } from '@/components/layout/Header/User.tsx';

export const Header = () => {
  return (
    <AppBar color='error' position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <User />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
