import { combineReducers } from 'redux';
import { ActionConstants } from '../actions';

const shoppingCart = (state = [], action) => {
  switch(action.type) {
    case ActionConstants.AddToCart:
      return [ ...state, action.payload];
    default:
      return state;
  }
}

const productList = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  shoppingCart,
  productList
});
