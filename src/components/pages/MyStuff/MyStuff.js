import React from 'react';
import './MyStuff.scss';
import { Link } from 'react-router-dom';
import itemsData from '../../../helpers/data/itemsData';

class MyStuff extends React.Component {
  state = {
    items: [],
  };

  getItems = () => {
    itemsData.getAllItems()
      .then((items) => this.setState({ items }))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <div className='MyStuff'>
          <h1 className='mt-3 mb-5'>My Stuff</h1>
          <ul className='list-group mb-5'>
            {
            items.map((item) => (
              <li key={item.id} className='list-group-item'>
                <Link to={`/stuff/${item.id}`}><h3 className="item-name">{item.itemName}</h3></Link>
              </li>))
            }
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default MyStuff;
