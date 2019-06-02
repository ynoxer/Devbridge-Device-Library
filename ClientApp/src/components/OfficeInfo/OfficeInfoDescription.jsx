import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

const OfficeInfoDescription = ({label, value}) => (
  <div class="description-list__pair-wrapper">
    <dt class="description-list__term">{label}</dt>
    <dd class="description-list-nowrap">{value}</dd>
  </div>
);

OfficeInfoDescription.propTypes = propTypes;

export default OfficeInfoDescription;
