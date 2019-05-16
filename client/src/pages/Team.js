import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

import { mapList } from '../constants';

import { getUser } from '../_actions/userActions';
import { getItems } from '../_actions/itemActions';

import NavBar from '../components/NavBar';
import MapStatistics from '../components/MapStatistics';
import DetailsModal from '../components/DetailsModal/DetailsModal';

import MapPercentageChart from '../components/MapPercentageChart';

const paper = {
  margin: '10px',
  padding: '25px',
  width: '80%',
  textAlign: 'center'
}

class Team extends Component{

  state = {
    open: false
  };

  componentDidMount() {
    this.props.getUser();
    // this.props.getItems();
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }
  
  render(){
    // const { user } = this.props.user;
    return(
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
          {/* Use the teamId prop to load in the team data and render the team name at the top of the page */}
          <Typography variant="title" color="inherit">Garbage</Typography>
          </Paper>
          <Paper style={paper}>
            <Typography variant="body1" color="primary">{this.props.user}</Typography>
          </Paper>
          <Paper style={paper}>
             <Typography variant="title" style={{marginBottom: '10px'}}>Add Match Record</Typography>
            <Button onClick={this.openModal} variant="fab" color="primary">
              <AddIcon/>
            </Button>
            <DetailsModal isOpen={this.state.open} closeModal={this.closeModal}/>
          </Paper>
          <Paper style={paper}>
            {(this.props.user == '') ?
            <Typography variant="body1" color="secondary">In order to access your data please login with Google</Typography> :
            <MapPercentageChart userId={this.props.user}/>
          }

          </Paper>
          {mapList.map((name) => (
            <MapStatistics mapName={name} key={name}/>
          ))}
        </Grid>
      </div>
    )
  }
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