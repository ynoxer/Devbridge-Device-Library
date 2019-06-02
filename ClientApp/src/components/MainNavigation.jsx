import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';

export default class MainNavigation extends Component {

  render(){
    return(
      <main className="page-main-content">
          <div className="page-frame">
            <nav className="main-navigation">
              <IndexLink to="/" className="main-navigation__item main-navigation__item--main" activeClassName="active">Device Booking</IndexLink>
              <Link to="/user-list/" className="main-navigation__item main-navigation__item--main" activeClassName="active">Users</Link>
              <Link to="/office-list/" className="main-navigation__item main-navigation__item--main" activeClassName="active">Offices</Link>
              <Link to="/event-list/" className="main-navigation__item main-navigation__item--main" activeClassName="active">Events</Link>
            </nav>
            {this.props.children}
          </div>
        </main>
    );
  }

}

