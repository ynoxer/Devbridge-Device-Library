import React from 'react';

import UserInfoDescription from './UserInfoDescription';



const UserInfoDetails = () => (
  <div class="grid__item details-section">

      <dl class="description-list">
          <h1 class="description-list__title">User details</h1>
          <UserInfoDescription label='Name:' value='John Snow' />
          <UserInfoDescription label='Email:' value='knows.nothing@north.got' />
          <UserInfoDescription label='Location:' value='Vilnius' />
          <UserInfoDescription label='Slack name:' value='LordCommander2' />
        
      </dl>

  </div>
);

export default UserInfoDetails;
