import './counter.css';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
}

/* This is a dumb component written as a functional react component */
const Counter = ({count, onIncrement}) => (
  <main className="page-main-content">
    <div>You have clicked the button {count} times.</div>
    <button onClick={onIncrement}>Increment counter</button>
  </main>
);

/* Written with class component syntax it would look like this:
class Counter extends React.Component {

  render(){
    { count, onIncrement } = this.props;

    return (
      <main className="page-main-content">
        <div>You have clicked the button {count} times.</div>
        <button onClick={onIncrement}>Increment counter</button>
      </main>
    );
  }
}
*/

Counter.propTypes = propTypes;

export default Counter;
