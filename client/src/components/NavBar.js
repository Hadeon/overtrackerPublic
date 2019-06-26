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

import GoogleModal from './Modals/GoogleModal';

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
  },
  appBar: {
    backgroundColor: '#222',
    color: 'white'
  }
});

class NavBar extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => { this.setState({ anchorEl: event.currentTarget })}

  handleClose = () => { this.setState({ anchorEl: null })}

  render(){
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.handleClick} aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true"/>
          </IconButton>
          <Menu id="simple-menu" open={Boolean(anchorEl)} anchorEl={this.ancherEl} anchorReference="none" onClose={this.handleClose}           PaperProps={{
            style: {
              width: 100,
              padding: 0,
              position: 'absolute',
              top: '60px'
            },
          }}>
              <MenuItem component={Link} to="/" onClick={this.handleClose}>Home</MenuItem>
              <MenuItem component={Link} to="/about" onClick={this.handleClose}>About</MenuItem>
              <MenuItem component={Link} to="/contact" onClick={this.handleClose}>Contact</MenuItem>
          </Menu>
          <Typography variant="title" color="inherit" className={classes.grow}>
            {this.props.navHeader}
          </Typography>
          <GoogleModal/>
        </Toolbar>
      </AppBar>

    </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
