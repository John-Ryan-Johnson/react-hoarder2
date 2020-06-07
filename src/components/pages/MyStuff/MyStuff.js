import React from 'react';
import './MyStuff.scss';
import StuffList from '../../shared/StuffList/StuffList';
import itemsData from '../../../helpers/data/itemsData';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    itemsData.getAllItems()
      .then((items) => this.setState({ items }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    const { items } = this.state;
    const buildItemList = items.map((item) => (
      <StuffList key={item.id} item={item} />
    ));

    return (
      <div className='MyStuff'>
        <h1 className='mt-3 mb-5'>My Stuff</h1>
        <div className="d-flex flex-wrap">
          <ul className='list-group mb-5'>
           {buildItemList}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyStuff;
