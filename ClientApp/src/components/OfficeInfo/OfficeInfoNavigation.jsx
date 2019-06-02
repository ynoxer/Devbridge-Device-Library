import React from 'react';
import { Link } from 'react-router';

const OfficeInfoNavigation = ({returnRoute}) => (
  <nav class="main-navigation">
    <Link
      to={returnRoute ? returnRoute : '/office-list'}
      class="main-navigation__item main-navigation__item--back"
    >
      Back
    </Link>
  </nav>
);

export default OfficeInfoNavigation;
