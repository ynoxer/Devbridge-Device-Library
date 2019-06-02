import counter from './components/Counter/counterReducer';
import deviceList from './components/DeviceList/deviceListReducer';
import userList from './components/UserList/userListReducer';
import officeList from './components/OfficeList/officeListReducer';
import deviceInfoDetails from './components/DeviceInfo/deviceInfoReducer';
import eventList from './components/EventList/eventsListReducer';
import auth from './components/Auth/authReducer';
import reservation from './components/ReservationModal/reservationReducer';
import signup from './components/SignUp/signUpReducer';
import newDevice from './components/NewDevice/newDeviceReducer';
import filter from './components/Filter/filterReducer';
import officeInfo from './components/OfficeInfo/officeInfoReducer';


// All application reducers must be registered here
const reducers = {
  counter,
  deviceList,
  userList,
  officeList,
  deviceInfoDetails,
  eventList,
  filter,
  auth,
  reservation,
  signup,
  newDevice,
  officeInfo
}

export default reducers;
