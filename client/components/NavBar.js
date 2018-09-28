import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const navigation = {
  flexGrow: 1,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '50px',
  backgroundColor: '#333'
}

const menuButton = {
  marginLeft: -12,
  marginRight: 20,
}

const navigationText = {
  marginLeft: '25px',
  color: 'white'
}

class NavBar extends Component{
  render(){
    return(
    <div style={navigation}>
      <h2 style={navigationText}>Welcome</h2>
    </div>
    )
  }
}

export default NavBar;
