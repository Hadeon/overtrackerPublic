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

  render() {
    return (
    <React.Fragment>
        <Typography variant="title" style={{textAlign: 'center', color: '#fff', marginBottom: '25px'}}>Match History</Typography>
        <div style={matchHistoryContainer}>
        {this.state.matchHistory.map(match => {
          let result = (match[2] === 'Win') ? win : loss;
          return (
            <Paper style={result}>
              <Link key={match[0]} to={`/team/${match[0]}`} style={teamLink}>
                <Button variant="text" matchId={match[0]} style={teamButton}>
                  {match[3].replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1')} -- {match[1]} -- Result: {match[2]}
                </Button>
              </Link>
            </Paper>
          )
        })}
      </div>
      <div style={teamMembersContainer}>
        <Typography variant="title" style={{textAlign: 'center', color: '#fff', marginBottom: '25px'}}>Team Members</Typography>
        <Paper style={{ padding: '10px'}}>
          <Typography variant="body1">Avecus</Typography>
          <Typography variant="body1">Tibby</Typography>
          <Typography variant="body1">Drezak</Typography>
        </Paper>
      </div>
    </React.Fragment>
    )
  }
}

const teamButton = {
  width: '100%',
  color: 'white'
}

const teamLink = {
  textDecoration: 'none'
}

const matchHistoryContainer = {
  height: '45vh',
  overflowY: 'scroll',
  padding: '0px 10px 0px 10px'
}

const teamMembersContainer = {
  height: '45vh',
  overflow: 'scroll',
  padding: '25px 10px 15px 10px'
}

const win = {
  backgroundColor: '#4b4',
  margin: '5px',
  padding: '5px'
}

const loss = {
  backgroundColor: '#b44',
  margin: '5px',
  padding: '5px'
}

const tie = {
  backgroundColor: '#aaa',
  margin: '5px',
  padding: '5px'
}