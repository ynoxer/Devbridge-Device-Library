import React from 'react'; 
import PropTypes from 'prop-types'; 
import moment from 'moment';


const Event = ({event}) => (
  <tr class="table-grid__row">  
    <td class="table-grid__cell table-grid__cell--title">{event.type.replace('_', ' ')}</td>
    <td class="table-grid__cell table-grid__cell--title">{moment(event.date).format('YYYY-MM-DD HH:mm')}</td> 
    <td class="table-grid__cell table-grid__cell--title">{event.deviceName}</td>  
    <td class="table-grid__cell table-grid__cell--title">{event.userName}</td>  
    <td class="table-grid__cell table-grid__cell--title">{event.officeCity}</td> 
  </tr>
)

export default Event;
