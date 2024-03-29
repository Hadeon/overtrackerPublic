import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import HeroSelect from './HeroSelect';
import MapResult from './MapResult';

import Anubis from '../../../assets/Anubis.png';
import Volskaya from '../../../assets/Volskaya.jpg';

import * as constants from '../../../constants/index';

class DetailsModal extends Component {
  state = {
    mapName: '',
    backgroundImage: '',
    result: '',
    score: '',
    heroOne: '',
    heroTwo: '',
    heroThree: '',
    heroFour: '',
    heroFive: '',
    heroSix: '',
    matchDate: '',
    heroesUsed: [],
    enemyHeroes: [],
    notValidated: true
  }

  // Allow for map grouping with heroes and subMap for Control points

  // If the props.matchId !== 0 then query the DB for the match details
  componentDidMount() {
    if(this.props.matchId !== 0 ){
      fetch(`${constants.apiRoute}/api/matches/details/${this.props.matchId}`)
      .then(res => res.json())
      .then(res => {
        let details = res[0].matchDetails;
        this.setState({ 
          mapName: details.map, 
          result: details.result,
          heroOne: details.allyHeroes[0],
          heroTwo: details.allyHeroes[1],
          heroThree: details.allyHeroes[2],
          heroFour: details.allyHeroes[3],
          heroFive: details.allyHeroes[4],
          heroSix: details.allyHeroes[5],
          notValidated: false
        })
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  handleChange = e => {
    e.target.name === 'mapName' ? (
      this.setState({ mapName: e.target.value }),
      this.setBackground(e.target.value)
    ) : (
      this.setState({ [e.target.name]: e.target.value })
    )
    setTimeout(() => {
      this.validate()
    }, 500)
    console.log(this.state);
  }

  validate() {
    if(this.state.mapName !== '' && this.state.result !== '') {
      this.setState({ notValidated: false });
    } else {
      this.setState({ notValidated: true });
    }
    console.log(this.props.userId);
  }
  
  setBackground = name => {
    console.log('Background set', name);
    name === 'Anubis' ? this.setState({ backgroundImage: `url(${Anubis})`}) : 
    name === 'Volskaya' ? this.setState({ backgroundImage: `url(${Volskaya})`}) : 
    this.setState({ backgroundImage: '' })
  }

  postData(userId, teamId){
    let matchData = {
      creatorId: this.props.userId,
      teamId: this.props.teamId,
      matchDetails: {
        map: this.state.mapName,
        result: this.state.result,
        allyHeroes: [
          this.state.heroOne,
          this.state.heroTwo,
          this.state.heroThree,
          this.state.heroFour,
          this.state.heroFive,
          this.state.heroSix
        ]
      },
      date: Date.now
    }
    axios
      .post(`${constants.apiRoute}/api/matches/add`, matchData)
      .then(() => console.log('Match added'))
      .then(() => this.props.closeModal())
      .catch(err => {
        console.error(err);
      });
  }

  render(){
    const { classes } = this.props;
    return(
      <Modal open={this.props.isOpen} aria-labelledby="simple-modal-title">
        <div className={classes.backgroundImage} style={{backgroundImage: this.state.backgroundImage}}>
          <Button onClick={this.props.closeModal} variant="fab" mini color="secondary" className={classes.closeButton}>X</Button>
          <Typography variant="title" id="modal-title" style={{ marginBottom: '50px' }}>
            Match Details
          </Typography>
          <Paper className={classes.mainContainer}>
            <MapResult 
              name="mapName"
              mapName={this.state.mapName} 
              result={this.state.result}
              handleChange={this.handleChange}/>
          </Paper>
          <Paper className={classes.mainContainer}>
            <Typography variant="title">Team Composition</Typography>
            {constants.composition.map((hero) => (
              <div className={classes.fieldContainer} key={hero}>
              <HeroSelect parentValue={this.state[hero]} parentClass={classes.fieldInput} handleChange={this.handleChange} inputPropsName={`${hero}`} inputPropsId={`${hero}id`}/>
            </div>
            ))}
          </Paper>
          <Paper className={classes.mainContainer}>
            {(this.props.matchId === 0 ) ? (
              <Button variant="raised" color="primary" onClick={() => {this.postData(this.props.userId, this.props.teamId)}} disabled={this.state.notValidated}>
                Submit Match
              </Button>
            ) : (
              <Button variant="raised" color="primary" onClick={() => {}} disabled={this.state.notValidated}>
                Update Match
              </Button>
            )}
          </Paper>
        </div>
      </Modal>
    )
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  closeButton: {
    position: 'absolute',
    right: 100,
    top: 20
  },
  mainContainer: {
    marginTop: '10px',
    position: 'relative',
    right: '75px',
    marginLeft: '75px',
    padding: '25px'
  },
  fieldContainer: {
    display: 'inline-flex',
    width: '33%'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }
});

DetailsModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailsModal)