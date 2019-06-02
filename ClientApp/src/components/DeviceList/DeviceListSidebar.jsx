import React from 'react';
import Filter from '../Filter/Filter';

const DeviceListSidebar = ({openNewDeviceModal}) => (
  <div className="sidebar">

    <button className="button button--add-new-device" 
    onClick={openNewDeviceModal}
    >
      New device
    </button>

    <div className="sidebar__content">
      <Filter />
    </div>
  </div>

);

export default DeviceListSidebar;
