import { HOME_ROUTE } from '@/routes/paths.ts';
import AdbIcon from '@mui/icons-material/Adb';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <>
      <Link
        to={HOME_ROUTE}
        style={{ display: 'flex', alignItems: 'center', color: 'white' }}
      >
        <AdbIcon sx={{ mr: 1 }} />
        <Typography
          variant='h5'
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          BOOKS
        </Typography>
      </Link>
    </>
  );
};
