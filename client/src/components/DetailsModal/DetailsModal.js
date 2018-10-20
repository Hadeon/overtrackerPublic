import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import HeroSelect from './HeroSelect';
import MapResult from './MapResult';

import Anubis from '../../assets/Anubis.png';

import * as constants from '../../constants/index';

class DetailsModal extends Component {
  state = {
    mapName: '',
    backgroundImage: '',
    result: '',
    heroOne: '',
    heroTwo: '',
    heroThree: '',
    heroFour: '',
    heroFive: '',
    heroSix: ''
  }

  handleChange = e => {
    [e.target.name] == 'mapName' ? (
      this.setState({ mapName: e.target.value }),
      this.setBackground(e.target.value)
    ) : (
      this.setState({ [e.target.name]: e.target.value })
    )
  }
  
  setBackground = name => {
    name === 'Anubis' ? this.setState({ backgroundImage: `url(${Anubis})`}) : this.setState({ backgroundImage: '' })
  }

  // Trying to get backgroundImage: `url(${Anubis})` to dynamically change on selection of the map

  render(){
    const { classes } = this.props;
    return(
      <Modal open={this.props.isOpen} aria-labelledby="simple-modal-title">
        <div className={classes.backgroundImage} style={{backgroundImage: this.state.backgroundImage}}>
          <Button onClick={this.props.closeModal} variant="fab" mini color="secondary" className={classes.closeButton}>X</Button>
          <Typography variant="title" id="modal-title" style={{ marginBottom: '50px' }}>
            Post Game Data
          </Typography>
          <Paper className={classes.mainContainer}>
            <MapResult 
              mapName={this.state.mapName} 
              result={this.state.result}
              handleChange={this.handleChange}/>
          </Paper>
          <Paper className={classes.mainContainer}>
            <Typography variant="title">Team Composition</Typography>
            {constants.composition.map((hero) => (
              <div className={classes.fieldContainer} key={hero}>
              <HeroSelect parentValue={this.state[hero]} parentClass={classes.fieldInput} handleChange={this.handleChange} inputPropsName={`${hero}`}inputPropsId={`${hero}id`}/>
            </div>
            ))}
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