import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class InviteModal extends Component{

  close = () => {
    this.props.closeModal();
  }

  render(){
    const { classes } = this.props;
    return(
      <Modal open={this.props.isOpen} aria-labelledby="simple-modal-title">
        <Paper className={classes.modal}>
          <Button onClick={this.close} variant="fab" mini color="secondary" className={classes.closeButton}>X</Button>
          <Typography variant="title" id="modal-title" style={{ marginBottom: '50px' }}>
            Invite Code
          </Typography>
          <Paper className={classes.mainContainer}>
            <Typography variant="body1" color="secondary">Copy the code below and send it to whoever you want to give access to the team. This code only works once, so you'll need to create additional codes for other users.</Typography>
          </Paper>
          <Paper className={classes.mainContainer}>
            <Typography variant="title">{this.props.inviteCode}</Typography>
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
  }
});

InviteModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InviteModal)