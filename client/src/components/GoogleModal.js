import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

import { setUser } from '../_actions/userActions';
 
const responseSuccess = (res) => {
  setUser(res);
  console.log(res);
}

const responseFailure = (res) => {
  console.log(res);
}

const disabledStyle = {
  backgroundColor: 'transparent',
  borderStyle: 'none',
}

export default class GoogleModal extends Component{
  render(){
    return(
      <div>
        <GoogleLogin
        clientId="153938303648-aj9e61uqj4d377es792r29ks3evdin7m.apps.googleusercontent.com"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        style={disabledStyle}>
        <Button style={{color:'white'}}>Login</Button>
        </GoogleLogin>
      </div>
    )
  }
}

GoogleModal.propTypes = {
  setUser: PropTypes.func.isRequired
}