import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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

export default class About extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
          <Typography variant="title" color="inherit">Second Page</Typography>
          <Typography variant="body" color="secondary">Router is working</Typography>
          </Paper>
        </Grid>
      </div>
    )
  }
}