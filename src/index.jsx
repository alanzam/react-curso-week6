import React from 'react';
import { render } from 'react-dom';
import App from './views/App';
import ProductGrid from './views/ProductGrid';
import ProductEdit from './views/ProductEdit';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { logger } from './middlewares';

const initialState = {
  productList: [
    {
      "name" : "Fender Standard Telecaster",
      "price": 599.99,
      "descripton": "Pure and simple, this instrument features classic Fender tone styling that evokes and honors the timeless Fender mainstays that came before it and contributed crucial DNA.",
      "category": "Guitars",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61HJs6PcwSL._SL1500_.jpg"
    },
    {
      "name" : "Fender Standard Stratocaster",
      "price": 495.67,
      "descripton": "Achieve the classic iconic tones that only a Fender Stratocaster with three single-coil pickups can provide",
      "category": "Guitars",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/I/71JN8n7l7qL._SL1500_.jpg"
    },
    {
      "name" : "Roland JUNO-DS61r",
      "price": 999.99,
      "descripton": "Lightweight, gig-ready instrument with pro sounds, enhanced performance features, and battery-powered operation",
      "category": "Keyboards",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/I/71YJfUnj3DL._SL1500_.jpg"
    },
    {
      "name" : "Pearl Roadshow",
      "price": 1499.99,
      "descripton": "Pearl Roadshow RS525WFC/C706 5-Piece Drum Set, Charcoal Metallic",
      "category": "Drums",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/I/81GjvrlFVEL._SL1500_.jpg"
    },
    {
      "name" : "Sterling By MusicMan 5 String",
      "price": 699.99,
      "descripton": "Sterling By MusicMan 5 String Sterling by Music Man StingRay Ray35QM Bass Guitar with Quilted Maple Top in Neptune Blue ",
      "category": "Guitars",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/I/81NGuHsW2oL._SL1500_.jpg"
    }
  ],
  shoppingCart: []
}

const store = createStore(reducers, initialState, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Router>
      <App >
        <Switch>
          <Route path="/Edit/:productName" render={() => (<ProductEdit />)} />
          <Route path="/Grid" render={() => (<ProductGrid  />)} />
        </Switch>
      </App>
    </Router>
  </Provider>
  ,
  document.getElementById('myApp')
);
