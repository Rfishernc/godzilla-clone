import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Auth from '../components/auth/auth';
import connection from '../helpers/data/connection';
import Listings from '../components/listings/listings';
import MyNavbar from '../components/myNavbar/myNavbar';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    connection();
  }

  isAuthenticated = () => {
    this.setState({ authenticated: true });
  }

  render() {
    const logoutClicked = () => {
      authRequests.logoutUser();
      this.setState({ authenticated: false });
    };

    if (!this.state.authenticated) {
      return (
        <div className='App'>
          <MyNavbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
        <Listings />
      </div>
    );
  }
}

export default App;
