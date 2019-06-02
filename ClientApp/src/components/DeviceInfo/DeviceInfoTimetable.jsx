import React from 'react';
import moment from 'moment';

const dateToTimeString = (date) => moment.utc(date).local()

const timeRangeForDay = (day, dateFrom, dateTo) => {
  const from = moment(dateFrom).local();
  const to = moment(dateTo).local();
  let fromLabel = '00:00';
  if(day.isSame(from, 'day')){
    fromLabel = from.format('HH:mm');
  }
  let toLabel = '24:00';
  if(day.isSame(to, 'day')){
    toLabel = to.format('HH:mm');
  }
  return `${fromLabel} - ${toLabel}`;
}

const DeviceInfoTimetable = ({reservationTimetable, day}) => (
  <table class="sidebar-table">
    <thead class="sidebar-table__head">
      <tr>
        <th className="sidebar-table__head-item">Time</th>
        <th className="sidebar-table__head-item">Reserved by</th>
      </tr>
    </thead>
    <tbody>
      {
        reservationTimetable.map(reservation => (
          <tr class="sidebar-table__row">
            <td class="sidebar-table__cell">
              { timeRangeForDay(day, reservation.dateFrom, reservation.dateTo) }
            </td>
            <td class="sidebar-table__cell sidebar-table__cell--bold-text">{reservation.userName}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default DeviceInfoTimetable;
