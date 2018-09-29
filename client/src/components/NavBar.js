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
import { Link } from 'react-router-dom';

import GoogleModal from './GoogleModal';

const drawerWidth = 240;

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
      <Menu open={this.state.open} style={{zIndex: 0}}>
        <MenuItem component={Link} to="/">Home</MenuItem>
        <MenuItem component={Link} to="/about">About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
