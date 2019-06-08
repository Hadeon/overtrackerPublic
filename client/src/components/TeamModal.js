import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

class TeamModal extends Component{
  render(){
    const { classes } = this.props;
    return(
      <Modal open={this.props.isOpen} aria-labelledby="simple-modal-title">
        <Paper className={classes.modal}>
          <Button onClick={this.props.closeModal} variant="fab" mini color="secondary" className={classes.closeButton}>X</Button>
          <Typography variant="title" id="modal-title" style={{ marginBottom: '50px' }}>
            Enter Team Name
          </Typography>
          <Paper className={classes.mainContainer}>
            <TextField placeholder="Team Name" fullWidth></TextField>
          </Paper>
        </Paper>
      </Modal>
    )
  }
}

const styles = theme => ({
  modal: {
    position: 'absolute',
    top: '15rem',
    width: '50%',
    left: '25%',
    right: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },
  paper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  mainContainer: {
    marginTop: '10px',
    position: 'relative',
    right: '75px',
    marginLeft: '75px',
    padding: '25px'
  },
  fieldContainer: {
    display: 'inline-flex',
    width: '33%'
  }
});

TeamModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamModal)