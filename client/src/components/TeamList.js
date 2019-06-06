import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { apiRoute } from '../constants/index';

export default class TeamList extends Component{
  constructor(props){
    super(props);
    this.state = {
      userTeams: []
    }
  }

  componentDidMount() {
    let teams = [];
    fetch(`${apiRoute}/api/teams/${this.props.userId}`)
    .then(res => res.json())
    .then(data => data.forEach(team => {
      teams.push([team.teamId, team.teamName]);
    })).then(() => {
      this.setState({ userTeams: teams });
      console.log(this.state.userTeams[0])
    })
  }

  render() {
    return (
    <React.Fragment>
      {this.state.userTeams.map(team => {
        return (
          <Paper style={subSection}>
            <Button variant="text" teamId={team[0]}>
              <Typography variant="body1" color="textPrimary">{team[1]}</Typography>
            </Button>
          </Paper>
        )
      })}
    </React.Fragment>
    // <Paper style={subSection}>
    //     <Button variant="text" teamId='1'>
    //       <Typography variant="body1" color="textPrimary">Garbage</Typography>
    //     </Button>
    // </Paper>
    )
  }
}

const subSection = {
  margin: '5px',
  padding: '5px'
}