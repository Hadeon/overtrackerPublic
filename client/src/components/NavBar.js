import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import GoogleModal from './GoogleModal';

import { setUser } from '../_actions/userActions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
});

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => { this.setState({ open: !this.state.open })}

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.handleToggle}/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Welcome
          </Typography>
          <GoogleModal/>
        </Toolbar>
      </AppBar>
      <Paper>
      <Menu open={this.state.open} style={{zIndex: 0, position: 'absolute', top: '0px'}}>
        <MenuItem component={Link} to="/">Home</MenuItem>
        <MenuItem component={Link} to="/about">About</MenuItem>
        <MenuItem onMouseUp={setUser({1:'test'})}>Contact</MenuItem>
      </Menu>
      </Paper>
    </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
