import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { getUser } from '../_actions/userActions';

import NavBar from '../components/NavBar';

const paper = {
  margin: '10px',
  padding: '25px',
  width: '80%',
  textAlign: 'center'
}
const header = {
  fontSize: '20px',
  fontFamily: 'Arial',
  marginBottom: '25px'
}

class Home extends Component{
  componentDidMount() {
    getUser();
    console.log(this.props)
  }
  checkUser() {
    getUser();

  }
  
  render(){
    return(
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
          <Typography variant="title" color="inherit">Overtracker</Typography>
          <Typography variant="body" color="secondary">In order to access your data please login with Google</Typography>
          </Paper>
          <Paper style={paper}>
            <Typography variant="body" color="primary">{this.props.user}</Typography>
            <Button onClick={this.checkUser}>Check</Button>
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