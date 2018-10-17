import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import HeroSelect from './HeroSelect';

import * as constants from '../../constants/index';

class DetailsModal extends Component {
  state = {
    mapName: '',
    result: '',
    heroOne: '',
    heroTwo: '',
    heroThree: '',
    heroFour: '',
    heroFive: '',
    heroSix: ''
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.teamComposition)
  }

  render(){
    const { classes } = this.props;
    return(
      <Modal open={this.props.isOpen} aria-labelledby="simple-modal-title">
        <div className={classes.paper}>
          <Button onClick={this.props.closeModal} variant="fab" mini color="secondary" className={classes.closeButton}>X</Button>
          <Typography variant="title" id="modal-title" style={{ marginBottom: '50px' }}>
            Post Game Data
          </Typography>
          <Paper className={classes.mainContainer}>
            <div className={classes.fieldContainer}>
              <Typography variant="h1" className={classes.fieldTitle}>Map</Typography>
              <Select value={this.state.mapName}
              className={classes.fieldInput} onChange={this.handleChange} outlined
              inputProps={{
                name: 'mapName',
                id: 'mapId'
              }}>
                {constants.mapList.map((name) => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))}
              </Select>
            </div>
            <div className={classes.fieldContainer}>
              <Typography variant="h1" className={classes.fieldTitle}>Result</Typography>
              <Select value={this.state.result}
              className={classes.fieldInput} onChange={this.handleChange} outlined
              inputProps={{
                name: 'result',
                id: 'resultId'
              }}>
                {constants.result.map((name) => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))}
              </Select>
            </div>
          </Paper>
          <Paper className={classes.mainContainer}>
            <Typography variant="title">Team Composition</Typography>
            {constants.composition.map((hero) => (
              <div className={classes.fieldContainer}>
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
  fieldTitle:{
    marginTop: '5px'
  },
  fieldInput: {
    marginLeft: '10px',
    width: '125px'
  }
});

DetailsModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailsModal)