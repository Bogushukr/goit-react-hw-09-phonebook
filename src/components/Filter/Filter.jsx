import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { contactsActions, contactsSelectors } from 'redux/contacts';

const useStyles = makeStyles({
  container: {
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    borderRadius: '20px',
    padding: '10px 20px',
  },
  filter: {
    marginBottom: '20px',
  },

  input: {
    width: '100%',
  },
});

export default function Filter() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const filter = useSelector(contactsSelectors.getFilter);

  const onChangeHandler = useCallback(
    event =>
      dispatch(contactsActions.setContactsFilter(event.currentTarget.value)),
    [dispatch],
  );

  return (
    <section id="filter" className={classes.filter}>
      <Container fixed className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              type="text"
              label="Find contacts by name"
              name="filter"
              onChange={onChangeHandler}
              value={filter}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}