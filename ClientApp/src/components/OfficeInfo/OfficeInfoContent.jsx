import React from 'react';
import Spinner from '../common/Spinner/Spinner';

import OfficeInfoDescription from './OfficeInfoDescription';
import OfficeInfoMap from './OfficeInfoMap';

const OfficeInfoDetail = ({loading, officeInfo}) => loading ? (        
  <div class="office-info">
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Spinner />
    </div>
  </div>
) : (
  <div class="office-info">
    <div class="office-info__main">
      <dl class="description-list">
        <h1 class="description-list__title">Office Details</h1>
        <OfficeInfoDescription label='Country:' value={officeInfo.country} />
        <OfficeInfoDescription label='City:' value={officeInfo.city} />
        <OfficeInfoDescription label='Adress:' value={officeInfo.address} />
      </dl>
    </div>
    <OfficeInfoMap query={`Devbridge ${officeInfo.address}, ${officeInfo.city}, ${officeInfo.country}`}/>
  </div>
);


export default OfficeInfoDetail;
