import React, { Component } from 'react'
import { Typography } from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Match extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="title">This is a Match page</Typography>
      </React.Fragment>
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
