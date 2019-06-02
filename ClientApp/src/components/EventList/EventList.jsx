import React from 'react'; 
import PropTypes from 'prop-types'; 
 
import Event from './Event'; 

const EventList = ({events}) => (
  <div> 
    <div> 
      <table className="table-grid">  
        <thead className="table-grid__head">  
          <tr>  
            <th className="table-grid__head-item">Event</th>  
            <th className="table-grid__head-item">Date</th>  
            <th className="table-grid__head-item">Device</th>
            <th className="table-grid__head-item table-grid__head-item--small">User</th> 
            <th className="table-grid__head-item table-grid__head-item--small">Location</th>  
          </tr>  
        </thead> 
        <tbody>
          {
            events.map(event => <Event key={event.id} event={event} />)
          } 
        </tbody>
      </table>
    </div> 
  </div> 
);

export default EventList;
