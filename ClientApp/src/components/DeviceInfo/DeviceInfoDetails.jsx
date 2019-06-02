import React from 'react';
import { Link } from 'react-router';

import DeviceInfoDescriptionPair from './DeviceInfoDescriptionPair';
import DeviceInfoDetailsSidebar from './DeviceInfoDetailsSidebar';
import DeviceInfoCustody from './DeviceInfoCustody';
import AvailabilityTag from '../AvailabilityTag';
import Spinner from '../common/Spinner/Spinner';

const DeviceInfoDetails = ({loading, deviceInfo, route}) => (
  <div className="grid__item details-section">
    <DeviceInfoDetailsSidebar />
    {        
      loading ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Spinner />
      </div>
      ) : /*deviceInfo.map(deviceInfo => */(
    <div className="details-section__content">
      <h1 className="details-section__title">
        {deviceInfo.name}
      </h1>
      <AvailabilityTag available={deviceInfo.status === 'AVAILABLE'} />
      {
        (deviceInfo.status != 'AVAILABLE') ? 
          <dl className="description-list description-list--with-background">
            <DeviceInfoDescriptionPair 
              label='Custody of:'
              value={<DeviceInfoCustody custody = {deviceInfo.custodyOf} email = {deviceInfo.email}/>} 
            />
            <DeviceInfoDescriptionPair label='Booked from:' value={deviceInfo.bookedFrom} />
          </dl>
        :
          <div/>
      }

      <dl className="description-list">
          <h3 className="description-list__title">Item details</h3>
          <DeviceInfoDescriptionPair label='ID#' value={deviceInfo.id} />
          <DeviceInfoDescriptionPair label='Serial number:' value={deviceInfo.serialNumber} />
          <DeviceInfoDescriptionPair label='OS:' value={deviceInfo.operatingSystem} />
          <DeviceInfoDescriptionPair label='Description:' value={deviceInfo.description} />
          <DeviceInfoDescriptionPair label='Location:' value={<Link to={`/office-info/${deviceInfo.locationId}?return=${route}`}>{deviceInfo.locationCity}</Link>} />
      </dl>
    </div>)}
  </div>
);

export default DeviceInfoDetails;


/* ismestos device info dalys:
          <DeviceInfoDescriptionPair label='Group:' value={deviceInfo.group} />
          <DeviceInfoDescriptionPair label='Subgroup:' value={deviceInfo.subgroup} />
          <DeviceInfoDescriptionPair label='Purchased on:' value={deviceInfo.purchasedOn} />
          <DeviceInfoDescriptionPair label='Vendor:' value={deviceInfo.vendor} />

*/
