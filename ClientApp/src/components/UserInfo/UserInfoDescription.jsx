import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

const UserInfoDescription = ({label, value}) => (
  <div class="description-list__pair-wrapper">
    <dt class="description-list__term">{label}</dt>
    <dd class="description-list__description">{value}</dd>
  </div>
);

UserInfoDescription.propTypes = propTypes;

export default UserInfoDescription;
