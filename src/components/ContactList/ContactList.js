import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from 'components/contactListItem';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <Container component="main" maxWidth="xs">
              <CssBaseline />

              <Grid item xs={12} md={6}>
                <List>
                  {visibleContacts.map(({ id, name, number }) => {
                    return (
                      <ContactListItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                      />
                    );
                  })}
                </List>
              </Grid>
            </Container>
          )}
        </>
      )}
    </>
  );
};
