import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.styles.css';

import { Header } from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/shop" component={ShopPage}/> 
        <Route exact path="/signin" component={SignInAndSignUpPage}/> 
      </Switch>
    </div>
  );
}

export default App;
