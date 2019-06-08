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

export default class About extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px'}}>
          <Paper style={paper}>
          <Typography variant="title" color="inherit">About Overtracker</Typography>
          <Typography variant="body" color="primary">My name is Eli, I'm a programmer located in Seattle who enjoys to play video games in my free time. After doing some scrims and minor tournaments, I realized how painful it could be to accurately track detailed stats in Excel files and whatnot. So I figured I may as well hone my skills, experiment with some tools and make it easier on myself and my teammates all at once.</Typography>
          <Typography variant="body" color="primary">This is a very very very early build and there's a TON of work to be done. Hopefully it'll come along quickly though!</Typography>
          </Paper>
        </Grid>
      </div>
    )
  }
}