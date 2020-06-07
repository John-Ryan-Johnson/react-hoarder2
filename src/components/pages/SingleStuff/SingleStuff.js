import React from 'react';
import './SingleStuff.scss';

import itemsData from '../../../helpers/data/itemsData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  };

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemsData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  render() {
    const { item } = this.state;

    return (
      <div className='SingleStuff'>
        <h1 className='mt-3'>Single Stuff</h1>
        <div className='row justify-content-center'>
          <div className='card col-6'>
            <img src={item.itemImage} alt={item.itemName} className='card-img-top' />
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
              <p className="card-text">{item.itemDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
