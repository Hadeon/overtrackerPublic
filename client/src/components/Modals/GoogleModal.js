import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUser, getUser } from '../../_actions/userActions';

const responseFailure = (res) => {
  console.log(res);
}

const disabledStyle = {
  backgroundColor: 'transparent',
  borderStyle: 'none',
}

// https://developers.google.com/identity/sign-in/web/backend-auth

// Replace userId with authentication using an ID token
// getAuthResponse().id_token

// Create users collection and use those _id's for the team members/whatnot instead of the userId. Simply store that user's data in the document instead of just setting state with the userId

class GoogleModal extends Component{

  responseSuccess = (res) => {
    this.props.setUser(res.googleId);
    console.log('Login triggered');
  }

  logout = (res) => {
    this.props.setUser('');
    console.log('Logout triggered')
  }

  render(){
    return(
      <div>
        {(this.props.user !== '') ? 
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.logout}
          style={disabledStyle}>
          <Button style={{color:'white'}}>Logout</Button>
        </GoogleLogout> :
        <GoogleLogin
          clientId="153938303648-aj9e61uqj4d377es792r29ks3evdin7m.apps.googleusercontent.com"
          onSuccess={this.responseSuccess}
          onFailure={responseFailure}
          style={disabledStyle}
          cookiePolicy={'single_host_origin'}>
          <Button style={{color:'white'}}>Login</Button>
        </GoogleLogin>
        }
      </div>
    )
  }
}

GoogleModal.propTypes = {
  setUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData,
})

export default connect(mapStateToProps, { setUser, getUser })(GoogleModal)