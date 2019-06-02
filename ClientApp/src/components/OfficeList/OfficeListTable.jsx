import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import Spinner from '../common/Spinner/Spinner';
 
const propTypes = {
  offices: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })),
  loading: PropTypes.bool.isRequired
};

const OfficeListTable = ({offices, loading}) => ( 
  <table className="table-grid"> 
    <thead className="table-grid__head"> 
      <tr> 
        <th className="table-grid__head-item">City</th> 
        <th className="table-grid__head-item">Country</th> 
        <th className="table-grid__head-item table-grid__head-item--small">Adress</th> 
      </tr> 
    </thead> 
    <tbody> 
      {
        loading ? (
          <tr>
            <td colSpan={4}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Spinner />
              </div>
            </td>
          </tr>
        ) : offices.map(office => (
          <tr key={office.id} className="table-grid__row">
            <td className="table-grid__cell table-grid__cell--title">
              <p
                className="on-click-link"
                onClick={() => browserHistory.push(`office-info/${office.id}`)}
              >
                {office.city}
              </p>
            </td>
            <td className="table-grid__cell table-grid__cell--title">{office.country}</td>
            <td className="table-grid__cell table-grid__cell--title">{office.address}</td>
          </tr>
        ))
      }
    </tbody> 
  </table> 
 
); 
 
OfficeListTable.propTypes = propTypes;

export default OfficeListTable; 
