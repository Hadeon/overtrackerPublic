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
    open: false
  };

  openModal = () => {
    console.log('open');
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
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

          {/* As with Home page, create a check for the userId and if it's not present then render a 'please login' message instead */}

          <Paper style={paper}>
          <TeamModal isOpen={this.state.open} closeModal={this.closeModal} userId={this.props.user}/>
          <div style={teamHeader}>
            <div style={{teamTitle}}>
              <p>My Teams</p>
            </div>
            <div style={teamButtons}>
              <Button variant="text" color="primary">
                <Typography variant="body2" color="primary">Join a Team</Typography>
              </Button>
              <Button variant="text" color="primary" onClick={this.openModal}>
                <Typography variant="body2" color="primary">Create a Team</Typography>
              </Button>
            </div>
          </div> 

          {/* On click reroute to the Team page (former Home page) and use the teamId prop to load in the data */}
          {(this.props.user === '') ?
            <Paper style={subSection}><Typography variant="body1" color="secondary">In order to access your data please login with Google</Typography></Paper> : (
              <TeamList userId={this.props.user}/>
            )
          }
          </Paper>
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

const subSection = {
  margin: '5px',
  padding: '5px'
}

const teamHeader = {
  display: 'flex', 
  flexDirection: 'row', 
  padding: '5px',
  position: 'relative'
}

const teamTitle = {
  margin: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
}

const teamButtons = {
  marginLeft: '50px'
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