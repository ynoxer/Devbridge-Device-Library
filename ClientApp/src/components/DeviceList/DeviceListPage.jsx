import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './deviceListActions';
import { filterSearchClear } from '../Filter/filterActions';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner/Spinner';

import DeviceListSidebar from './DeviceListSidebar';
import DeviceListCard from './DeviceListCard';
import ReservationModal from '../ReservationModal/ReservationModal';
import NewDeviceModal from '../NewDevice/NewDeviceModal';

const stringIncludes = (str, searchValue) =>
  str.toLowerCase().indexOf(searchValue.toLowerCase()) != -1;

const matchesSearchQuery = (device, searchQuery) => {
  const query = (str) => stringIncludes(str, searchQuery);
  const { name, serialNumber, operatingSystem, description } = device;
  return query(name) || query(serialNumber) || query(operatingSystem) || query(description);
}

const applyFilter = (devices, filter, user) => {
  let filteredDevices = [...devices]
  //Location filter
  if(filter.locations && filter.locations.length){
    filteredDevices = filteredDevices.filter(device =>
      filter.locations.some(location => location == device.locationId)); 
  }
  //Availability filters (working as ORs)
  if(filter.available && filter.bookedByMe){
    filteredDevices = filteredDevices.filter(device =>
      device.status === 'AVAILABLE' || device.custodyOfId == user.userId)
  }else if(filter.available){
    filteredDevices = filteredDevices.filter(device =>
      device.status === 'AVAILABLE');
  }else if(filter.bookedByMe){
    filteredDevices = filteredDevices.filter(device =>
      device.custodyOfId == user.userId)
  }
  //Search
  if(filter.searchQuery){
    filteredDevices = filteredDevices.filter(device =>
      matchesSearchQuery(device, filter.searchQuery));
  }
  return filteredDevices;
}

class DeviceListPage extends React.Component {

  componentDidMount() {
    this.props.getAllDevices();
  }

  componentWillUnmount = this.props.filterSearchClear;

  render(){
    const { closeNewDeviceModal, openNewDeviceModal, newDeviceModalIsOpen } = this.props;
    const { loading, devices, filter, user } = this.props;
    return (
      loading ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Spinner />
        </div>
      ) : (
        <div className="grid">
          <DeviceListSidebar 
            openNewDeviceModal={openNewDeviceModal}
          />
          {
            applyFilter(devices, filter, user).map(device => (
              <DeviceListCard 
                key={device.id}
                available={device.status === 'AVAILABLE'}
                name={device.name}
                id={device.id.toString()}
                os={device.operatingSystem}
                bookFunc={(id) => this.props.bookDevice(id, user)}
                returnFunc={this.props.returnDevice}
                custody={device.custodyOf}
                locationName={device.locationCity}
                locationId={device.locationId}
                route={this.props.location.pathname}
                user={this.props.user}
                openReservationModal={() => this.props.openReservationModal(device.id)}
              /> 
            ))
          }
          <ReservationModal
            isOpen={this.props.reservationModalIsOpen}
            onClose={this.props.closeReservationModal}
            deviceId={this.props.reservationDeviceId}
          />
          <NewDeviceModal
            isOpen={newDeviceModalIsOpen}
            onClose={closeNewDeviceModal}
          />

        </div>
      )
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.deviceList.loading,
  user: state.auth.user,
  devices: state.deviceList.devices,
  reservationModalIsOpen: state.deviceList.reservationModalIsOpen,
  reservationDeviceId: state.deviceList.reservationDeviceId,
  filter: state.filter,
  newDeviceModalIsOpen: state.deviceList.newDeviceModalIsOpen
})

const mapDispatchToProps = {
  ...actionCreators,
  filterSearchClear
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceListPage);
