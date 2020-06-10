import React from 'react';

import itemsData from '../../../helpers/data/itemsData';

import './New.scss';

class New extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  saveItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const newItem = {
      itemName,
      itemImage,
      itemDescription,
    };
    itemsData.postItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to post new item: ', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="New col-12">
        <h1 className="mt-3">New Stuff</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.saveItem}>Save</button>
        </form>
      </div>
    );
  }
}

export default New;
