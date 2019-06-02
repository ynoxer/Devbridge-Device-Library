import React from 'react';
import ChangeLocationModal from './ChangeLocationModal';

import DeviceReservations from './DeviceReservations';

function reservation()
{
    this.props.res = true;
}

const DeviceInfoReservationSidebar = ({device, user, bookFunc, returnFunc, openReservationModal, openChangeLocationModal}) => {
  const bookingButton = () => {
    if (device.custodyOf === user.userName) {
      return(
        <button 
          onClick={() => returnFunc(device.id)} className="button button--return"
        >
          <img src="/images/minus-big.png" alt='' className="button__icon"/>
          Return device
        </button>
      )
    } else {
      if (device.status === 'AVAILABLE') {
        return(
          <button 
            onClick={() => bookFunc(device.id)} className="button button--primary"
          >
            <img src="/images/plus-big.png" alt='' className="device-card__action-item-image"/>
            Book device
          </button>
        )
      } else {
        return(
          <button 
            className="button button--disabled"
          >
            <img src="/images/plus-big.png" alt='' className="device-card__action-item-image"/>
            Book device
          </button>
        )
      }
    }
  };

  return (
    <div class="reservation-sidebar">
      <div class="reservation-sidebar__button-section">
        {bookingButton()}
        <button class="button button--primary" onClick={openReservationModal}>
          <img src="/images/clock-white.png" class="button__icon" />
          Reservation
        </button>
        <button className="button button--secondary"
          onClick={openChangeLocationModal}
        >
          Change location
        </button>
      </div>
      <DeviceReservations />
    </div>
  );
};

export default DeviceInfoReservationSidebar;
