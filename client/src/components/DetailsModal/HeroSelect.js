import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { heroList } from '../../constants';

class HeroSelect extends Component {
  render(){
    const { classes } = this.props;
    return(
      <Select value={this.props.parentValue}
        className={classes.fieldInput} onChange={this.props.handleChange}
        inputProps={{
          name: this.props.inputPropsName,
          id: this.props.inputPropsId
        }}>
          {heroList.map((name) => (
            <MenuItem value={name}>{name}</MenuItem>
          ))}
      </Select>
    )
  }
}

const styles = theme => ({
  fieldInput: {
    marginLeft: '10px',
    width: '125px'
  }
});

HeroSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroSelect)