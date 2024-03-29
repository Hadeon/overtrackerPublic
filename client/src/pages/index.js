import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import GoogleModal from '../components/GoogleModal';
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

export default class Index extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
          <h1 style={header}>Sign In</h1>
          <GoogleModal/>
          </Paper>
        </Grid>
      </div>
    )
  }
}