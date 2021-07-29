import PropTypes from 'prop-types';
import { Container, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    padding: '10px 20px',
  },
  filter: {
    marginBottom: '20px',
  },

  input: {
    width: '100%',
  },
});

const Filter = ({ filter, onChange }) => {
  const classes = useStyles();
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
              onChange={onChange}
              value={filter}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

Filter.defaultProps = { filter: '' };

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
