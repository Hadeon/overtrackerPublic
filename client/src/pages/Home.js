import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

import { getUser } from '../_actions/userActions';
import { getItems } from '../_actions/itemActions';

import NavBar from '../components/NavBar';
import TestChart from '../components/TestChart';
import MapStatistics from '../components/MapStatistics';
import DetailsModal from '../components/DetailsModal';

const paper = {
  margin: '10px',
  padding: '25px',
  width: '80%',
  textAlign: 'center'
}

const mapNames = [
  'Horizon',
  'Anubis',
  'Volskaya',
  'Nepal'
]

class Home extends Component{

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
    const { items } = this.props.item;
    return(
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
          <Typography variant="title" color="inherit">Overtracker</Typography>
          <Typography variant="body1" color="secondary">In order to access your data please login with Google</Typography>
          </Paper>
          <Paper style={paper}>
            <Typography variant="body1" color="primary">{this.props.user}</Typography>
          </Paper>
          <Paper style={paper}>
            <Button onClick={this.openModal} variant="fab" color="primary">
              <AddIcon/>
            </Button>
            <DetailsModal isOpen={this.state.open} closeModal={this.closeModal}/>
          </Paper>
          <Paper style={paper}>
            <TestChart/>
          </Paper>
          {mapNames.map((name) => (
            <MapStatistics mapName={name}/>
          ))}
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  getUser: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData,
  item: state.item
})

export default connect(mapStateToProps, { getUser, getItems })(Home)