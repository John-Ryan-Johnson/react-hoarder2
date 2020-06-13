import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';
import './StuffList.scss';

class StuffList extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="StuffList">
        <li className="list-group-item">
          <Link to={singleLink}><h3 className="item-name">{item.itemName}</h3></Link>
          <Link className="btn btn-warning" to={editLink}><i class="fas fa-pencil-alt"></i></Link>
          <button className="btn btn-dark" onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>
        </li>
      </div>
    );
  }
}

export default StuffList;
