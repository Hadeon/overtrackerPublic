import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
import Router from 'next/router';
 
const responseSuccess = (res) => {
  console.log(res);
  Router.push('/Home');
}

const responseFailure = (res) => {
  console.log(res);
  message = 'Failed to login';
}

const loginButton = {
  width: '100px'
}

const message = '';

export default class GoogleModal extends Component{
  render(){
    return(
      <div>
        <GoogleLogin
        clientId="153938303648-aj9e61uqj4d377es792r29ks3evdin7m.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        />
        <p>{message}</p>
      </div>
    )
  }
}