import { Grid } from '@mui/material';
import s from '@/styles/Loader/Loader.module.scss';

export const Loader = () => {
  return (
    <>
      <Grid
        container
        style={{
          height: window.innerHeight - 64,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className={s.loader}></span>
      </Grid>
    </>
  );
};
