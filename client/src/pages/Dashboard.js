import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { getUser } from '../_actions/userActions';
import { getItems } from '../_actions/itemActions';

import NavBar from '../components/NavBar';
import TeamList from '../components/TeamList';
import TeamModal from '../components/TeamModal';

class Dashboard extends Component{
  state = {
    open: false,
    modal: '',
    message: '',
    key: ''
  };

  openModal = (modalAction) => {
    this.setState({ modal: modalAction});
    if(modalAction === 'join') {
      this.setState({ message: 'Enter Invite Key'});
    } 
    if(modalAction === 'create' ) {
      this.setState({ message: 'Enter Team Name'});
    }
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false, key: Math.random() });
  }

  render(){
    return(
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
            <Typography variant="title" color="inherit" style={{textAlign: 'center'}}>Overtracker</Typography>
          </Paper>
          <Paper style={paper}>
            <Typography variant="body1" color="textPrimary">Welcome to the Overtracker App! 
            <br/><br/>
            Create or join a team in order to begin tracking match statistics. In order to join a team, that team's admins must send you an invitation code. Once you've joined a team the admins of that team can link your userId with the data being tracked so that you can have your own personal statistics page. This way you can see data across all your teams and track your progress over time.</Typography>
          </Paper>
          {(this.props.user === '') ? (
            <Paper style={paper}><Typography variant="body1" color="secondary">In order to access your data please login with Google.</Typography></Paper>
          ) : ( 
            <Paper style={paper}>
            <TeamModal isOpen={this.state.open} closeModal={this.closeModal} userId={this.props.user} message={this.state.message} modal={this.state.modal}/>
            <div style={teamHeader}>
                <Button variant="raised" color="primary" onClick={() => this.openModal('create')} style={teamButtons}>
                  Create a Team
                </Button>
                <Button variant="raised" color="primary" onClick={() => this.openModal('join')} style={teamButtons}>
                  Join a Team
                </Button>
                <Typography variant="body1" color="secondary" style={teamMessage}>In order to join a team, ask the team's creator to send you an Invite Code.</Typography>
            </div> 
            <TeamList userId={this.props.user} key={this.state.key}/>  
            </Paper>
          )}
        </Grid>
      </div>
    )
  }
}

const paper = {
  margin: '10px',
  padding: '25px',
  width: '80%'
}

const teamHeader = {
  display: 'flex', 
  flexDirection: 'row', 
  padding: '5px 5px 25px 5px',
  position: 'relative'
}

const teamMessage = {
  marginTop: '10px'
}

const teamButtons = {
  marginRight: '25px'
}

Dashboard.propTypes = {
  getUser: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData,
  item: state.item
})

export default connect(mapStateToProps, { getUser, getItems })(Dashboard)