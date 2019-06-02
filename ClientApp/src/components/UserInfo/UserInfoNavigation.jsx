import React from 'react';
import { Link } from 'react-router';
 
const UserInfoNavigation = () => ( 
  <nav class="main-navigation"> 
    <Link
      to="/user-list/" 
      class="main-navigation__item main-navigation__item--back" 
    > 
      Back to the user list 
    </Link> 
  </nav> 
); 
 
export default UserInfoNavigation; 
