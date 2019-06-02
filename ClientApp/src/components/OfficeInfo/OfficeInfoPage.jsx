import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './officeInfoActions';

import OfficeInfoNavigation from './OfficeInfoNavigation';
import OfficeInfoContent from './OfficeInfoContent';
import OfficeInfoEditButton from './OfficeInfoEditButton';



class OfficeInfoPage extends React.Component {
  componentDidMount() {
    this.props.getOfficeInfo(this.props.params.id);
  }

  render(){
    const { loading, officeInfo, location } = this.props;
    return (
      <main class="page-main-content">
        <div class="page-frame">
          <OfficeInfoNavigation returnRoute={location.query.return}/>
          <div>
            <OfficeInfoContent loading={loading} officeInfo={officeInfo}/>
          </div>
          {/* <OfficeInfoEditButton/> */}
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.officeInfo.loading,
  officeInfo: state.officeInfo.officeInfo
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeInfoPage);
