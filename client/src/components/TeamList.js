import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
      teams.push([team._id, team.teamName]);
    })).then(() => {
      this.setState({ userTeams: teams });
    })
  }

  render() {
    return (
    <React.Fragment>
      {this.state.userTeams.map(team => {
        return (
          <Paper style={subSection}>
            <Link key={team[0]} to={`/team/${team[0]}`} style={teamLink}>
              <Button variant="text" teamId={team[0]} style={teamButton}>
                <Typography variant="body1" color="textPrimary">{team[1]}</Typography>
              </Button>
            </Link>
          </Paper>
        )
      })}
    </React.Fragment>
    )
  }
}

const subSection = {
  margin: '5px',
  padding: '5px'
}

const teamButton = {
  width: '100%'
}

const teamLink = {
  textDecoration: 'none'
}