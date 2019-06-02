import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class LoginNavigation extends Component {

  render(){
    return(
      <main className="page-main-content">
        <form className="login">
          <nav className="login__nav">
            <Link to="/auth/login" className="login__nav-item login__nav-text" activeClassName="active">
            Log in
            </Link>  
            <Link to="/auth/signup" className="login__nav-item login__nav-text" activeClassName="active">
            Sign up
            </Link>
          </nav>
          {this.props.children}
        </form>
      </main>   
    );
  }  

}
