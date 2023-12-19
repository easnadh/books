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
import { useAuth } from '@/hooks/useAuth.ts';

const userMenu = ['Profile', 'Logout'];

export const User = () => {
  const { user, logOut } = useAuth();

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
                      logOut();
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
