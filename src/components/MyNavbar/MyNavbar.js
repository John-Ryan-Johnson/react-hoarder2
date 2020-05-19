import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">React Hoarder</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link home" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link myStuff" href="#MyStuff">My Stuff</a>
              </li>
              <li className="nav-item">
                <a className="nav-link new" href="#New">New</a>
              </li>
              <li className="nav-item">
                {
                  authed
                    ? <button className="btn btn-danger nav-link" onClick={this.logMeOut}>Log Out</button>
                    : ''
                }
              </li>
             </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
