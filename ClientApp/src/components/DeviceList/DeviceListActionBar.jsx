import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {
  bookingEnabled: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  custody: PropTypes.string
};

const DeviceListActionBar = ({bookingEnabled, id, bookFunc, returnFunc, custody, user, openReservationModal}) => {
 
  const bookingButton = () => {

    if (custody === user.userName) {
      return(
        <button 
        onClick={() => returnFunc(id)} className="device-card__action-item device-card__action-item--return"
        >
          <img src="/images/minus.png" alt='' className="device-card__action-item-image"/>
          Return device
        </button>
      )
    } else {
      if (bookingEnabled) {
        return(
          <button 
            onClick={() => bookFunc(id)} className="device-card__action-item device-card__action-item--primary"
          >
            <img src="/images/plus.png" alt='' className="device-card__action-item-image"/>
            Book device
          </button>
        )
      } else {
        return(
          <button 
            className="device-card__action-item device-card__action-item--primary disabled"
          >
            <img src="/images/plus.png" alt='' className="device-card__action-item-image"/>
            Book device
          </button>
        )
      }
    }
  };

  return(
    <div className="device-card__action-bar">
      <button className="device-card__action-item device-card__action-item--secondary" onClick={openReservationModal}>
        <img src="/images/clock.png" alt='' className="device-card__action-item-image"/>
        Reserve
      </button>
      {bookingButton()}
    </div>
  )
};

DeviceListActionBar.propTypes = propTypes;

export default DeviceListActionBar;
