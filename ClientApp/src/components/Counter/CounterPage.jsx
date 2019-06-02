import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './counterActions';
import Counter from './Counter';


export class CounterPage extends React.Component {

  render() {
    console.log('counter');
    console.dir(this.props);
    return (
      <Counter
        onIncrement={this.props.increment}
        count={this.props.count}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)
