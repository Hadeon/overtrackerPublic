import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUser } from '../_actions/userActions';
 


const responseFailure = (res) => {
  console.log(res);
}

const disabledStyle = {
  backgroundColor: 'transparent',
  borderStyle: 'none',
}

class GoogleModal extends Component{

  state = {
    isSignedIn: false
  }

  responseSuccess = (res) => {
    this.props.setUser(res.googleId);
    this.setState({ isSignedIn: true });
    console.log(res);
  }

  logout = (res) => {
    this.props.setUser('test');
    this.setState({ isSignedIn: false });
    console.log(this.state.isSignedIn, res)
  }

  render(){
    return(
      <div>
        {this.state.isSignedIn ? 
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
          style={disabledStyle}>
          <Button style={{color:'white'}}>Login</Button>
        </GoogleLogin>
        }
      </div>
    )
  }
}

GoogleModal.propTypes = {
  setUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData,
})

export default connect(mapStateToProps, { setUser })(GoogleModal)