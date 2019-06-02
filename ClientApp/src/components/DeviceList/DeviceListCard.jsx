import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import AvailabilityTag from '../AvailabilityTag';
import DeviceListActionBar from './DeviceListActionBar';

const propTypes = {
  available: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  os: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  custody: PropTypes.string
}

const DeviceListCard = ({available, name, id, os, locationName, locationId, custody, bookFunc, returnFunc, user, route, openReservationModal}) => (
  <div className="grid__item device-card">
    <div className="device-card__image">
      <img src="/images/device.png" alt='' style={{maxHeight: "100px", maxWidth: "100px"}}/>
    </div>
    <AvailabilityTag available={available} list_tag={true}/>
    <div className="device-card__main-content">
      <h4 className="device-card__title">
        <Link to={`/device-info/${id}`}>{name}</Link>
      </h4>
      <dl> 
        <dt>Identification number: </dt>
        <dd>{id}</dd>
      </dl>
      <dl>
        <dt>OS: </dt>
        <dd>{os}</dd>
      </dl>
      <dl> 
        <dt>Location: </dt>
        <dd>
          <Link to={`/office-info/${locationId}?return=${route}`}>{locationName}</Link>
        </dd>
      </dl>
      <dl hidden={available}> 
        <dt>Custody of: </dt>
        <dd>{custody}</dd>
      </dl>
    </div>
    <DeviceListActionBar
      bookingEnabled={available}
      bookFunc={bookFunc}
      returnFunc={returnFunc}
      id={id}
      custody={custody}
      user={user}
      openReservationModal={openReservationModal}
    />
  </div>
);

DeviceListCard.propTypes = propTypes;

export default DeviceListCard;
