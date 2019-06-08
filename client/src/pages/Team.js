import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

import { mapList, apiRoute } from '../constants';

import { getUser } from '../_actions/userActions';
import { getItems } from '../_actions/itemActions';

import NavBar from '../components/NavBar';
import MapStatistics from '../components/MapStatistics';
import DetailsModal from '../components/DetailsModal/DetailsModal';

import MapPercentageChart from '../components/MapPercentageChart';

class Team extends Component{

  state = {
    open: false,
    valid: false,
    teamName: ''
  };
  
  componentWillMount() {
    fetch(`${apiRoute}/api/teams/teamMember/${this.props.match.params.teamId}/${this.props.user}`)
    .then(res => res.json())
    .then(res => {
      this.setState({ valid: res[0].teamMembers.includes(this.props.user), teamName: res[0].teamName });
      console.log(res[0])
    })
  }

  componentDidMount() {
    this.props.getUser();
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }
  
  render(){
    return(
      <React.Fragment>
        <NavBar/>
        {( this.state.valid === true ) ? (
          <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
          <Typography variant="title" color="inherit">{this.state.teamName}</Typography>
          </Paper>
          <Paper style={paper}>
            <Typography variant="body1" color="primary">{this.props.user}</Typography>
          </Paper>
          <Paper style={paper}>
            <Typography variant="title" style={{marginBottom: '10px'}}>Add Match Record</Typography>
            <Button onClick={this.openModal} variant="fab" color="primary">
              <AddIcon/>
            </Button>
            <DetailsModal isOpen={this.state.open} closeModal={this.closeModal} userId={this.props.user} teamId={this.props.match.params.teamId}/>
          </Paper>
          <Paper style={paper}>
            <MapPercentageChart userId={this.props.user} teamId={this.props.match.params.teamId}/>
          </Paper>
          {mapList.map((name) => (
            <MapStatistics mapName={name} key={name}/>
          ))}
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
  width: '80%',
  textAlign: 'center'
}

Team.propTypes = {
  getUser: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData,
  item: state.item
})

export default connect(mapStateToProps, { getUser, getItems })(Team)