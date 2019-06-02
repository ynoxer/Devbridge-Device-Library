import React from 'react'; 
import { connect } from 'react-redux'
import * as actionCreators from './officeListActions';

import OfficeListTable from './OfficeListTable';
import OfficeListAdd from './OfficeListAdd';
 
class OfficeListPage extends React.Component {

  componentDidMount() {
    this.props.getAllOffices();
  }

  render(){
    const { loading, offices } = this.props;
    return (
      <div>
        <OfficeListTable loading={loading} offices={offices} /> 
        <OfficeListAdd /> 
      </div>
    );
  }

};

const mapStateToProps = (state) => ({
  loading: state.officeList.loading,
  offices: state.officeList.offices
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeListPage)
