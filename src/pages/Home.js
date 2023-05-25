import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import phoneBook from '../images/phone-book.png';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>Welcome to Phonebook</h1>
          <img src={phoneBook} alt="Phonebook" title="Phonebook" />
        </Box>
      </Container>
    </React.Fragment>
  );
}
