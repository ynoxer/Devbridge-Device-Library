import React from 'react';

import UserInfoNavigation from './UserInfoNavigation';
import UserInfoDetails from './UserInfoDetails';
import UserInfoEditButton from './UserInfoEditButton';

const UserInfoPage = () => (
    <main class="page-main-content">
    <div class="page-frame">
      <UserInfoNavigation />
      <div class="grid grid--content-with-sidebar">
        <UserInfoDetails />
      </div>
      <UserInfoEditButton/>
    </div>

  </main>
);

export default UserInfoPage;