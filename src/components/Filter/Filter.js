import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { updateFilter } from '../../redux/contacts/filterSlice';

import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form>
            <TextField
              id="search-bar"
              type="text"
              value={filter}
              onChange={changeFilter}
              label="Find contacts by name"
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Filter;
