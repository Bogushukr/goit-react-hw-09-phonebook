import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  container: {
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    padding: '10px 20px',
    width: '100%',
    marginTop: '100px',
  },
  home: {
    alignSelf: 'center',
    marginBottom: '20px',
  },
  content: {},

  text: {
    fontFamily: 'American Typewriter',
    color: '#3F51B5',
  },
});
const HomeView = () => {
  const classes = useStyles();

  return (
    <section id="home" className={classes.home}>
      <Container fixed className={classes.container}>
        <Box component="div" className={classes.content}>
          <h1 className={classes.text}>Welcome to the phone book!</h1>
        </Box>
      </Container>
    </section>
  );
};

export default HomeView;
