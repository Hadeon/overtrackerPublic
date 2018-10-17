import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import * as constants from '../../constants';

class MapResult extends Component { 
  render() {
    const { classes } = this.props;
    return(
      <div>
        <div className={classes.fieldContainer}>
          <Typography variant="h1" className={classes.fieldTitle}>Map</Typography>
          <Select value={this.props.mapName}
          className={classes.fieldInput} onChange={this.props.handleChange} outlined
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
          <Select value={this.props.result}
          className={classes.fieldInput} onChange={this.props.handleChange} outlined
          inputProps={{
            name: 'result',
            id: 'resultId'
          }}>
            {constants.result.map((name) => (
              <MenuItem value={name}>{name}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
    )
  }
}

const styles = theme => ({
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

MapResult.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MapResult)