import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="nav">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/contact">
          CONTACT
        </Link>
        {currentUser !== null ? (
          <div className="nav-link" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
