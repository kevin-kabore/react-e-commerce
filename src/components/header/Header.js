import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

export const Header = () => {
  return(
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
      </div>
    </div>
  )
}

