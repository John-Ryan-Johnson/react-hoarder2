import React from 'react';
import './MyStuff.scss';
import { Link } from 'react-router-dom';
import itemsData from '../../../helpers/data/itemsData';

class MyStuff extends React.Component {
  state = {
    items: [],
  };

  getItems = () => {
    itemsData
      .getAllItems()
      .then((items) => this.setState({ items }))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <React.Fragment>
        <div className='MyStuff'>
          <h1 className='mt-3 mb-5'>My Stuff</h1>
          <ul className='list-group mb-5'>
            {this.state.items.map((item) => (
              <Link key={item} className='list-group-item'>
                <h3>{item.itemName}</h3>
              </Link>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default MyStuff;
