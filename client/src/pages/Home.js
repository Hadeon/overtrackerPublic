import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { getUser } from '../_actions/userActions';

import NavBar from '../components/NavBar';

const paper = {
  margin: '10px',
  padding: '25px',
  width: '80%',
  textAlign: 'center'
}

class Home extends Component{
  componentDidMount() {
    getUser();
  }
  
  render(){
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
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  getUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData,
})

export default connect(mapStateToProps, { getUser })(Home)