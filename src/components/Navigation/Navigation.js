import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/UseAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2}>
          <NavLink to="/">Home</NavLink>
        </Grid>
        <Grid item xs={3} sm={2}>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </Grid>
      </Grid>
    </nav>
  );
};
