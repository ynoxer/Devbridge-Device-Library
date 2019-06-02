import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner/Spinner';

const propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      office: PropTypes.string.isRequired,
      slack: PropTypes.string.isRequired,
    })),
  loading: PropTypes.bool.isRequired,
};


const UserListTable = ({users, loading}) => (
  <table className="table-grid">
    <thead className="table-grid__head">
      <tr>
        <th className="table-grid__head-item">Name</th>
        <th className="table-grid__head-item">Email</th>
        <th className="table-grid__head-item table-grid__head-item--small">Office</th>
        <th className="table-grid__head-item table-grid__head-item--small">Slack Name</th>
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
        ) : users.map(user => (
          <tr key={user.id} className="table-grid__row">
            <td className="table-grid__cell table-grid__cell--title">{user.name}</td>
            <td className="table-grid__cell table-grid__cell--title">{user.email}</td>
            <td className="table-grid__cell table-grid__cell--title">{user.locationCity}</td>
            <td className="table-grid__cell table-grid__cell--title">{user.slackName}</td>
          </tr>
        ))
      }
    </tbody>
  </table>

);

UserListTable.propTypes = propTypes;

export default UserListTable;
