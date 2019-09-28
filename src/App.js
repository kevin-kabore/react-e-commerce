import React from 'react';
import { Route } from 'react-router-dom';

import './app.styles.css';

import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/> 
      <Route exact path="/shop" component={ShopPage}/> 
    </div>
  );
}

export default App;
