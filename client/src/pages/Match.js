import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar';
import MatchHistory from '../components/MatchHistory';

import { mapList, apiRoute } from '../constants';

import { getUser } from '../_actions/userActions';

class Match extends Component {

  state = {
    detailsOpen: false,
    inviteOpen: false,
    inviteCode: '',
    valid: false,
    teamName: '',
    key: ''
  };
  
  componentDidMount() {
    fetch(`${apiRoute}/api/teams/teamMember/${this.props.match.params.teamId}/${this.props.user}`)
    .then(res => res.json())
    .then(res => {
      this.setState({ valid: res[0].teamMembers.includes(this.props.user), teamName: res[0].teamName });
    }).catch((err) => {
      console.log('Not logged in');
    })
  }
  
  openDetailsModal = () => {
    this.setState({ detailsOpen: true });
  }
  
  closeDetailsModal = () => {
    this.setState({ detailsOpen: false, key: Math.random() });
  }
  
  openInviteModal = () => {
    let data = {
      creatorId: this.props.user,
      teamId: this.props.match.params.teamId,
      active: true
    }
    axios
      .post(`${apiRoute}/api/teams/invite`, data)
      .then((res) => {
        this.setState({ inviteCode: res.data._id })
      })
      .then(() =>  this.setState({ inviteOpen: true }))
      .catch(err => {
        console.error(err);
    });
  }
  
  closeInviteModal = () => {
    this.setState({ inviteOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar navHeader="Match Details"/>
        {( this.state.valid === true ) ? (
          <Grid container direction="row" justify="center" alignItems="center" style={flexContainer} key={this.state.key}>
            <Paper style={sidebar}>
              <MatchHistory teamId={this.props.match.params.teamId} userId={this.props.user}/>
            </Paper>
            <div style={mainContainer}>
              <Paper style={paper}>
                <Typography variant="title" color="inherit">{this.state.teamName}</Typography>
              </Paper>
            </div>
          </Grid>
        ) : (
          <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
              <Paper style={paper}>
                <Typography variant="body1" color="secondary">Not Authorized.</Typography>
              </Paper>
            </Grid>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

const paper = {
  margin: '10px',
  padding: '25px',
  textAlign: 'center'
}

const teamOptions = {
  margin: '10px',
  padding: '25px'
}

const optionsButton = {
  margin: '0 10px 0 10px'
}

const addMatch = {
  float: 'right'
}

const flexContainer = {
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'row'
}

const sidebar = {
  flexGrow: '1',
  width: '200px',
  height: '100%',
  margin: '0px 0px 10px 0px',
  paddingTop: '40px',
  alignSelf: 'flex-start',
  backgroundColor: '#222'
}

const mainContainer = {
  width: '75%'
}

Match.propTypes = {
  getUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData
})

export default connect(mapStateToProps, { getUser })(Match)