import PropTypes from 'prop-types';
import Close from '@material-ui/icons/Close';
import { ListItem, Button, Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  item: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '10px',
    fontSize: '12px',
  },

  name: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    justifySelf: 'start',
    maxWidth: '100%',
  },
  phone: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    justifySelf: 'end',
    maxWidth: '100%',
  },
  button: {
    padding: 0,
    justifySelf: 'end',
    width: '30px',
    height: '30px',
  },
});

const ContactListItem = ({ name, number, onDelete, cssRef }) => {
  const classes = useStyles();
  return (
    <>
      <Divider component="li" />
      <ListItem component="li" button className={classes.item} ref={cssRef}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.phone}>{number}</p>
        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
          onClick={onDelete}
        >
          <Close />
        </Button>
      </ListItem>
      <Divider component="li" />
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
