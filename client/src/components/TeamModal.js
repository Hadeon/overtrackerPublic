import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import * as constants from '../constants/index';

class TeamModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      notValidated: true,
      error: ''
    }
  }

  handleInputChange = e => {
    this.setState({
        input: e.target.value
    });
    setTimeout(() => {
      this.validate()
    }, 500)
  }

  validate() {
    if(this.state.input !== '') {
      this.setState({ notValidated: false });
    } else {
      this.setState({ notValidated: true });
    }
  }

  handleJoin() {
    let inviteCode = { 
      code: this.state.input,
      userId: this.props.userId
    };
    axios
      .post(`${constants.apiRoute}/api/teams/join`, inviteCode)
      .then(() => this.props.closeModal())
      .catch(err => {
        this.setState({ err: 'Invalid' })
      });
  }

  handleCreate() {
    let team = { teamName: this.state.input, teamMembers: [this.props.userId], creatorId: [this.props.userId] };
    axios
      .post(`${constants.apiRoute}/api/teams/add`, team)
      .then(() => console.log('Team Created'))
      .then(() => (this.setState({ input: ''}, this.props.closeModal())))
      .catch(err => {
        console.error(err);
      });
  }

  close = () => {
    this.setState({ input: '', err: '' });
    this.props.closeModal();
  }

  render(){
    const { classes } = this.props;
    return(
      <Modal open={this.props.isOpen} aria-labelledby="simple-modal-title">
        <Paper className={classes.modal}>
          <Button onClick={this.close} variant="fab" mini color="secondary" className={classes.closeButton}>X</Button>
          <Typography variant="title" id="modal-title" style={{ marginBottom: '50px' }}>
            {this.props.message}
          </Typography>
          <Paper className={classes.mainContainer}>
            <TextField placeholder={this.props.message} value={this.state.input} fullWidth onChange={this.handleInputChange}></TextField>
          </Paper>
          <Paper className={classes.mainContainer}>
            {this.props.modal === 'join' ? ( 
              <Button variant="raised" color="primary" onClick={() => this.handleJoin()} disabled={this.state.notValidated}>
                Join Team
              </Button>
            ) : (
              <Button variant="raised" color="primary" onClick={() => this.handleCreate()} disabled={this.state.notValidated}>
                Create Team
              </Button>
            )}
            <Typography color="secondary">{this.state.err}</Typography>
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