import React from 'react'; 
import { connect } from 'react-redux' 
import ReactModal from 'simple-react-modal'; 
import { getAllOffices } from '../OfficeList/officeListActions';
import { changeLocation } from './deviceInfoActions';
import Spinner from '../common/Spinner/Spinner';
 
 
class ChangeLocationModal extends React.Component{ 
  constructor(props) { 
    super(props); 
    this.state = {
      location: 0
    };
  }

  componentDidMount = this.props.getAllOffices;
  
 
  handleLocationChange = (e) => {
    this.setState({location: e.target.value}); 
  } 

  handleClick = (e) => { 
    e.preventDefault(); 
    this.props.changeLocation(this.props.device.id, this.state.location)
  } 
 
 
  render(){ 
    const { loading } = this.props; 
    const { isOpen, onClose } = this.props; 
    return ( 
      <div> 
        <ReactModal show={isOpen} onClose={onClose}> 
          {
            this.props.isLoadingOffices ? (
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Spinner />
              </div>
            ) : (
              <div> 
                <dl className="description-list"> 
                  <h1 className="description-list__title">Change Location</h1> 
                  <label htmlFor="location-select">Location:</label> 
                  <select
                    className="input-select form-control"
                    id="location-select"
                    onChange={this.handleLocationChange}
                  >
                    <option value={0}></option>
                    {
                      this.props.offices.map(office => (
                        <option value={office.id}>{office.city}</option>
                      ))
                    }
                  </select> 
                </dl> 

                <button disabled={!this.state.location} onClick={this.handleClick} className="button button--change_location"> 
                  Change Location 
                </button> 
              </div>
            )
          }
        </ReactModal> 
      </div> 
    ) 
  } 
} 

const mapStateToProps = (state) => ({
  isLoadingOffices: state.officeList.loading,
  offices: state.officeList.offices,
  device: state.deviceInfoDetails.deviceInfo
})

const mapDispatchToProps = {
  getAllOffices,
  changeLocation
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ChangeLocationModal);
