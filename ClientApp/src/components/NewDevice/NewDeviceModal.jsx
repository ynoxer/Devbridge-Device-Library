import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './newDeviceActions';
import ReactModal from 'simple-react-modal';
import Spinner from '../common/Spinner/Spinner';

import { addNewDevice } from './newDeviceActions';
import { getAllOffices } from '../OfficeList/officeListActions';

class NewDeviceModal extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      serialNumber: '',
      os: '',
      description: '',
      locationId: 0
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSerialNumberChange = this.handleSerialNumberChange.bind(this);
    this.handleOsChange = this.handleOsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount = this.props.getAllOffices;
  

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSerialNumberChange(e) {
    this.setState({ serialNumber: e.target.value });
  }

  handleOsChange(e) {
    this.setState({ os: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleLocationChange = (e) => this.setState({locationId: e.target.value});

  handleClick(e) {
    e.preventDefault();
    this.props.addNewDevice(this.state);
    //this.props.onClose();
  }


  render(){
    const { loading, isLoadingOffices, offices } = this.props;
    const { isOpen, onClose } = this.props;
    console.dir(this.state.locationId)
    return (
      <div>
      <ReactModal show={isOpen} onClose={onClose}>
        <div> 
          <dl className="description-list">
            <h3 className="description-list__title">Item details</h3>

            <div className="description-list__pair-wrapper">
              <dt className="description-list__term">Name</dt>
              <input 
                type='text' className="description-list__description input-new-device"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>

            <div className="description-list__pair-wrapper">
              <dt className="description-list__term">Serial number</dt>
              <input 
                type='text' className="description-list__description input-new-device"
                value={this.state.serialNumber}
                onChange={this.handleSerialNumberChange}
              />
            </div>

            <div className="description-list__pair-wrapper">
              <dt className="description-list__term">OS</dt>
              <input 
                type='text' className="description-list__description input-new-device"
                value={this.state.os}
                onChange={this.handleOsChange}
              />
            </div>

            <div className="description-list__pair-wrapper">
              <dt className="description-list__term">Description</dt>
              <input 
                type='text' className="description-list__description input-new-device"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>
            <div className="description-list__pair-wrapper">
              <dt className="description-list__term">Location</dt>
              <select
                className="description-list__description input-new-device-select"
                value={this.state.locationId}
                onChange={this.handleLocationChange}
              >
                <option value={0}></option>
                {
                  !isLoadingOffices && offices.map(office => (
                    <option value={office.id}>{office.city}</option>
                  ))
                }
              </select>
            </div>
          </dl>        
          <button disabled={!this.state.locationId} onClick={this.handleClick} className="button button--new-device">
            Add device
          </button>
        </div>
      </ReactModal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.deviceList.loading,
  isLoadingOffices: state.officeList.loading,
  offices: state.officeList.offices
})

const mapDispatchToProps = {
  ...actionCreators,
  getAllOffices
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeviceModal);
