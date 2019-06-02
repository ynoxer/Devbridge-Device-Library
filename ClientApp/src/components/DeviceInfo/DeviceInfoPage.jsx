import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './deviceInfoActions';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner/Spinner';

import DeviceInfoNavigation from './DeviceInfoNavigation';
import DeviceInfoReservationSidebar from './DeviceInfoReservationSidebar';
import DeviceInfoDetails from './DeviceInfoDetails'
import DeviceInfoDescriptionPair from './DeviceInfoDescriptionPair';
import ReservationModal from '../ReservationModal/ReservationModal';
import ChangeLocationModal from './ChangeLocationModal'

class DeviceInfoPage extends React.Component {

  componentDidMount() {
    this.props.getDeviceInfo(this.props.params.id);
  }

  render(){
    console.dir(this.props)
    const { loading, deviceInfo, reservationModalIsOpen, user } = this.props;
    const { closeReservationModal, openReservationModal } = this.props;
    const { changeLocationModalIsOpen, closeChangeLocationModal, openChangeLocationModal } = this.props;
    return (
        <main className="page-main-content">
        <div className="page-frame">
          <DeviceInfoNavigation />
          { loading ? (
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Spinner />
              </div>
            ): (
            <div class="grid grid--content-with-sidebar">
              <DeviceInfoDetails
                deviceInfo={deviceInfo}
                loading={loading}
                route={this.props.location.pathname}
              />
              <DeviceInfoReservationSidebar
                openReservationModal={openReservationModal}
                device={deviceInfo}
                user={user} 
                bookFunc={this.props.bookDevice}
                returnFunc={this.props.returnDevice}
                openChangeLocationModal={this.props.openChangeLocationModal}
              />
              <ReservationModal
                isOpen={reservationModalIsOpen}
                onClose={closeReservationModal}
                deviceId={deviceInfo.id}
              />
              <ChangeLocationModal 
                isOpen={changeLocationModalIsOpen} 
                onClose={closeChangeLocationModal} 
              /> 
            </div>
            )
          }
        </div>
      </main>
    )
  }
}


const mapStateToProps = (state) => ({
  loading: state.deviceInfoDetails.loading,
  deviceInfo: state.deviceInfoDetails.deviceInfo,
  reservationModalIsOpen: state.deviceInfoDetails.reservationModalIsOpen,
  user: state.auth.user,
  changeLocationModalIsOpen: state.deviceInfoDetails.changeLocationModalIsOpen
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfoPage);
