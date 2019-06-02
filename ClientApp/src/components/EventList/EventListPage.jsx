import React from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 

import * as actionCreators from './eventListActions'; 
import EventList from './EventList'; 
import Spinner from '../common/Spinner/Spinner';


export class EventListPage extends React.Component { 
  componentDidMount = () => {
    this.props.getAllEvents();
  }

  render() {
    const { isLoading, events } = this.props;

    return isLoading ? (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Spinner />
      </div>
    ) : (
      <EventList 
        events={events}
      /> 
    ) 
  } 
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(actionCreators, dispatch); 

const mapStateToProps = (state) => { 
  return { 
    isLoading: state.eventList.isLoading,
    events: state.eventList.events
  }; 
} 

export default connect(mapStateToProps, mapDispatchToProps)(EventListPage)
