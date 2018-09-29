import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routes from './pages/Routes';

class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

export default App;
