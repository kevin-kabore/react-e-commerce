import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.styles.css';

import { Header } from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/shop" component={ShopPage}/> 
      </Switch>
    </div>
  );
}

export default App;
