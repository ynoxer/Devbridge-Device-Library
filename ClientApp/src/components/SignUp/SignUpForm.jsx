import React from 'react';

const fieldChangeDecorator = (field, onInputChange) => 
  (e) => onInputChange(field, e.target.value);

const SignUpForm = ({
  onInputChange, values, isLoadingOffices, offices, onSubmit, isSigningUp, error
}) => (
  <div className="login__content">
    <h2 className="login__title">Create a new account</h2>
    <p className="login__text">Enter your details below to create a new account:</p>

    <label htmlFor="email-field" className="hidden-label">E-mail</label>
    <input
      type="text"
      placeholder="E-mail"
      className="input-field"
      id="username-field"
      value={values.email}
      onChange={fieldChangeDecorator('email', onInputChange)}
    />

    <label htmlFor="name-field" className="hidden-label">Name</label>
    <input 
      type="text"
      placeholder="Name"
      className="input-field"
      id="name-field"
      value={values.name}
      onChange={fieldChangeDecorator('name', onInputChange)}
    />

    <label htmlFor="password-field" className="hidden-label">Password</label>
    <input
      type="password"
      placeholder="Password"
      className="input-field"
      id="password-field" 
      value={values.password}
      onChange={fieldChangeDecorator('password', onInputChange)}
    />

    <label htmlFor="repeat-password-field" className="hidden-label">Repeat password</label>
    <input
      type="password"
      placeholder="Repeat password"
      className="input-field"
      id="repeat-password-field"
      value={values.repeatedPassword}
      onChange={fieldChangeDecorator('repeatedPassword', onInputChange)}
    />

    <label htmlFor="slack-name-field" className="hidden-label">Slack name</label>
    <input
      type="text"
      placeholder="Slack name"
      className="input-field"
      id="slack-name-field"
      value={values.slackName}
      onChange={fieldChangeDecorator('slackName', onInputChange)}
    />

    <label htmlFor="location-field" className="hidden-label">Location</label>
    <select
      placeholder="Location"
      className="input-select form-select"
      id="location-field"
      value={values.locationId}
      onChange={fieldChangeDecorator('locationId', onInputChange)}
    >
      <option value="">Location</option>
      {
        !isLoadingOffices && offices.map(office => (
          <option value={office.id}>{office.city}</option>
        ))
      }
    </select>
    { 
      error && Object.entries(error).map(([key, value]) => (
        <div className="alert alert-danger">{value}</div>
      ))
    }
    <button 
      onClick={onSubmit} 
      className="form-button form-button--primary"
    >
      {isSigningUp ? 'Signing up...' : 'Sign up'}
    </button>
  </div>
);

export default SignUpForm;
