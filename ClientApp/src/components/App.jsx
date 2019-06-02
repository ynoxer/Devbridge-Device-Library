import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header
          isLoggedIn={this.props.isLoggedIn}
          user={this.props.user}
        />
        <div className="page-layout">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(App);
