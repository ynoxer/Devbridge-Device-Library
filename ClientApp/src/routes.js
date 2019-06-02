import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App';
import DeviceInfoPage from './components/DeviceInfo/DeviceInfoPage';
import DeviceListPage from './components/DeviceList/DeviceListPage';
//Change the from part once it's implemented
import EventListPage from './components/EventList/EventListPage';
import OfficeListPage from './components/OfficeList/OfficeListPage';
import MainNavigation from './components/MainNavigation';
import UserListPage from './components/UserList/UserListPage';
import UserInfoPage from './components/UserInfo/UserInfoPage';
import OfficeInfoPage from './components/OfficeInfo/OfficeInfoPage';
import LoginNavigation from './components/LoginNavigation';
import LoginPage from './components/Auth/LoginPage'
import AuthComponent from './components/Auth/AuthComponent';
import SingUpPage from './components/SignUp/SignUpPage';

const Routes = ({history}) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route component={AuthComponent}>
        <Route component={MainNavigation} >
          <IndexRoute component={DeviceListPage} />
          <Route path="event-list" component={EventListPage} />
          <Route path="user-list" component={UserListPage} />
          <Route path="office-list" component={OfficeListPage} />
        </Route>
        <Route path="/device-info/:id" component={DeviceInfoPage}/>
        <Route path="user-info" component={UserInfoPage} />
        <Route path="office-info/:id" component={OfficeInfoPage} />
        <Route path="auth" component={LoginNavigation}>
          <Route path="login" component={LoginPage} />
          <Route path="signup" component={SingUpPage}/>
        </Route>
      </Route>
    </Route>
  </Router>
);

//<Route path="device-info" component={DeviceInfoPage} />

export default Routes;
