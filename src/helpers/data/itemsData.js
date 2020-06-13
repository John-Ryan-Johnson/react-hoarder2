import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllItems = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json`)
    .then((result) => {
      const allItemsObj = result.data;
      const items = [];
      if (allItemsObj !== null) {
        Object.keys(allItemsObj).forEach((itemId) => {
          const newItem = allItemsObj[itemId];
          newItem.id = itemId;
          items.push(newItem);
        });
      }
      resolve(items);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const postItem = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

const putItem = (itemId, updatedItem) => axios.put(`${baseUrl}/items/${itemId}.json`, updatedItem);


export default {
  getAllItems,
  getSingleItem,
  postItem,
  deleteItem,
  putItem,
};
