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
    fetch(`${apiRoute}/api/matches/${this.props.teamId}`)
    .then(res => res.json())
    .then(data => data.forEach(match => {
      matches.push([match._id, match.matchDetails.map, match.matchDetails.result, match.date]);
    })).then(() => {
      this.setState({ matchHistory: matches });
    }).catch((err) => {
      
    })
  }

  // Change background based on Win or Loss

  render() {
    return (
    <div style={matchHistoryContainer}>
      <Typography variant="title" color="textPrimary" style={{textAlign: 'center'}}>Match History</Typography>
      {this.state.matchHistory.map(match => {
        return (
          <Paper style={subSection}>
            <Link key={match[0]} to={`/team/${match[0]}`} style={teamLink}>
              <Button variant="text" matchId={match[0]} style={teamButton}>
                {match[3].replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1')} -- {match[1]} -- Result: {match[2]}
              </Button>
            </Link>
          </Paper>
        )
      })}
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
  height: '75vh',
  overflow: 'scroll',
  padding: '25px 10px 0px 10px'
}