import React from 'react';
import { render } from 'react-dom';
import App from './views/App';
import ProductGrid from './views/ProductGrid';

const initialState = {
  currentRoute: 'Home/Product/Grid',
  pageName: 'Product Grid',
  productList: [
    {
      name: 'Product_1',
      description: 'Product 1 desc',
      category: 'Category',
      price: 6
    },
    {
      name: 'Product_2',
      description: 'Product 2 desc',
      category: 'Category',
      price: 9
    },
    {
      name: 'Product_3',
      description: 'Product 3 desc',
      category: 'Category2',
      price: 7
    },
    {
      name: 'Product_4',
      description: 'Product 4 desc',
      category: 'Category2',
      price: 12
    }
  ]
}

render(
  <App
    currentRoute={initialState.currentRoute}
    pageName={initialState.pageName}
    cartItems={5}
    >
    <ProductGrid
      productList={initialState.productList}
      />
  </App>,
  document.getElementById('myApp')
);
