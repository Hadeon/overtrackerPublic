import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Team from './pages/Team'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/team/:teamId" component={Team} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </Provider> 
    );
  }
}

export default App;
