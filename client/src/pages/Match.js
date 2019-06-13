import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser } from '../_actions/userActions';

class Match extends Component {
  render() {
    return (
      <div>
        <Typography variant="title">This is a Match page</Typography>
      </div>
    )
  }
}

Match.propTypes = {
  getUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user.userData
})

export default connect(mapStateToProps, { getUser })(Match)