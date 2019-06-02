import React from 'react';
import { Link } from 'react-router';

const DeviceInfoNavigation = () => (
  <nav className="main-navigation">
    <Link 
      to="/"
      className="main-navigation__item main-navigation__item--back"
    >
      Back to the list
    </Link>
  </nav>
);

export default DeviceInfoNavigation;
