import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { apiRoute } from '../constants/index';

export default class MatchHistory extends Component{
  constructor(props){
    super(props);
    this.state = {
      matchHistory: []
    }
  }

  componentDidMount() {
    let matches = [];
    fetch(`${apiRoute}/api/teams/matchHistory/${this.props.teamId}/${this.props.userId}`)
    .then(res => res.json())
    .then(data => data.forEach(match => {
      matches.push([match._id, match.mapName, match.result, match.date]);
    })).then(() => {
      this.setState({ matchHistory: matches });
    }).catch((err) => {
      
    })
  }

  render() {
    return (
    <div style={matchHistoryContainer}>
      <Typography variant="title" color="textPrimary">Match History</Typography>
      {this.state.matchHistory.map(match => {
        return (
          <Paper style={subSection}>
            <Link key={match[0]} to={`/team/${match[0]}`} style={teamLink}>
              <Button variant="text" teamId={match[0]} style={teamButton}>
                <Typography variant="body1" color="textPrimary">{match[1]}</Typography>
              </Button>
            </Link>
          </Paper>
        )
      })}
      <Paper style={subSection}>
        <Typography variant="body1" color="textPrimary">Test</Typography>
      </Paper>
    </div>
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

const matchHistoryContainer = {
  height: '300px',
  overflow: 'scroll'
}