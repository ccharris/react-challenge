import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }
  changeUserStatus = () => {
    this.setState({ isUser: !this.state.isUser })
  }

  view = () => {
    return !this.state.isUser ? <Login toggleForm={this.changeUserStatus} /> :  <Signup toggleForm={this.changeUserStatus} />
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div>
                {this.view()}
              </div>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/list">
              <List />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
