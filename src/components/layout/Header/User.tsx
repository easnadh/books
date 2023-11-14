import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@/routes/paths.ts';
import React from 'react';
import { auth } from '@/services/firebase.ts';
import { useAuthState } from 'react-firebase-hooks/auth';

const userMenu = ['Profile', 'Logout'];

export const User = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        {user ? (
          <>
            <Tooltip title='Open menu'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={`${user?.photoURL}`} alt={`${user} avatar`} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenu.map((menuItem) => (
                <MenuItem
                  key={menuItem}
                  onClick={() => {
                    handleCloseUserMenu();
                    if (menuItem === 'Profile') {
                      navigate(PROFILE_ROUTE);
                    } else {
                      navigate(LOGIN_ROUTE);
                      auth.signOut();
                    }
                  }}
                >
                  <Typography textAlign='center'>{menuItem}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Link to={LOGIN_ROUTE} style={{ color: 'white' }}>
            <Button color='inherit'>Login</Button>
          </Link>
        )}
      </Box>
    </>
  );
};
