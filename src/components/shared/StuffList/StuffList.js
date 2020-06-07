import React from 'react';
import './StuffList.scss';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/propz/itemShape';

class StuffList extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;
    return (
      <div className="StuffList">
        <li className="list-group-item">
          <Link to={singleLink}><h3 className="item-name">{item.itemName}</h3></Link>
        </li>
      </div>
    );
  }
}

export default StuffList;
