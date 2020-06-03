import React from 'react';
import './MyStuff.scss';
import { Link } from 'react-router-dom';

class MyStuff extends React.Component {
  render() {
    return (
      <div className="MyStuff">
        <h1 className="mt-3 mb-5">My Stuff</h1>
        <Link className="btn btn-dark mr-5" to="/stuff/12345/edit">Edit</Link>
        <Link className="btn btn-dark ml-5" to="/stuff/12345">Single</Link>
      </div>
    );
  }
}

export default MyStuff;
