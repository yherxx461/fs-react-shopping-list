import axios from 'axios';

//axios GET call
export const fetchItems = () => {
    return axios.get('api/shoppingList');
};

//axios POST call
export const postItems = () => {
    return axios.post('api/shoppingList');
};


//axios DELETE call
export const deleteItems = (itemId) => {
    return axios.delete(`/api/shoppingList/${itemId}`);
};


//axios PUT call
export const updateItemPurchased = (itemId) => {
    return axios.put(`/api/shoppingList/${itemId}`);
};


