import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './authActions';
import { browserHistory } from 'react-router';
import Spinner from '../common/Spinner/Spinner';

class AuthComponent extends React.Component {
  componentDidMount(){
    if(!this.props.isLoggedIn){
      this.props.checkAuth();
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const currentRoute = nextProps.location.pathname.replace(/^[\/]+|[\/]+$/g, '');
    if(!nextProps.isCheckingAuth && !nextProps.isLoggedIn 
        && !(currentRoute === 'auth/login' || currentRoute === 'auth/signup')){
      browserHistory.push('auth/login');
    }
    if(!nextProps.isCheckingAuth && nextProps.isLoggedIn
      && (currentRoute === 'auth/login' || currentRoute === 'auth/signup')){
      browserHistory.push('/');
    }
  }

  render() {
    if(this.props.isCheckingAuth) {
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Spinner />
        </div>
      );
    }else{
      return this.props.children;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isCheckingAuth: state.auth.isCheckingAuth
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
