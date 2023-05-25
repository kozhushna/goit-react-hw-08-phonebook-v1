import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <NavLink to="/register">Register</NavLink>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NavLink to="/login">Log In</NavLink>
        </Grid>
      </Grid>
    </div>
  );
};
