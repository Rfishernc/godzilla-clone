import React from 'react';
import './auth.scss';
import authRequests from '../../helpers/data/authRequests';

class auth extends React.Component {
  authenticateUser = (event) => {
    event.preventDefault();
    authRequests.authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='auth'>
        <button className='btn btn-danger' onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default auth;
