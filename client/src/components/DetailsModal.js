import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
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
    right: 100,
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

class DetailsModal extends Component {
  render(){
    const { classes } = this.props;
    return(
      <Modal open={this.props.isOpen} aria-labelledby="simple-modal-title">
        <div className={classes.paper}>
          <Button onClick={this.props.closeModal} variant="fab" mini color="secondary" className={classes.closeButton}>X</Button>
          <Typography variant="h6" id="modal-title" style={{ marginBottom: '50px'}}>
            Post Game Data
          </Typography>
          <Paper className={classes.mainContainer}>
            <Typography variant="title">Map</Typography>
            <select>
              <option>Anubis</option>
              <option>Nepal</option>
              <option>Eichenwald</option>
              <option>King's Row</option>
            </select>
          </Paper>
          <Paper className={classes.mainContainer}>
            <Typography variant="title">Result</Typography>
            <select>
              <option>Win</option>
              <option>Loss</option>
            </select>
          </Paper>
        </div>
      </Modal>
    )
  }
}

DetailsModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailsModal)