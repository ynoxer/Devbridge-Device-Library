import React from 'react';
import { connect } from 'react-redux';
import { getAllOffices } from '../OfficeList/officeListActions';
import { signup } from './signUpActions';

import SignUpForm from './SignUpForm';
import Spinner from '../common/Spinner/Spinner';

class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formInput: {}
    }
  }

  componentDidMount = () => {
    this.props.getAllOffices();
  }

  onInputChange = (field, value) => {
    let formInput = { ...this.state.formInput };
    formInput[field] = value;
    this.setState({formInput});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state.formInput);
  }
  
  render() {
    if(this.props.isLoggingIn){
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Spinner />
        </div>
      );
    }else{
      return (
        <SignUpForm
          values={this.state.formInput}
          onInputChange={this.onInputChange}
          isLoadingOffices={this.props.isLoadingOffices}
          offices={this.props.offices}
          onSubmit={this.onSubmit}
          error={this.props.error}
          isSigningUp={this.props.isSigningUp}
        />
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isLoadingOffices: state.officeList.loading,
  offices: state.officeList.offices,
  error: state.signup.error,
  isSigningUp: state.signup.isSigningUp,
  isLoggingIn: state.auth.isLoggingIn
})

const mapDispatchToProps = {
  getAllOffices,
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
