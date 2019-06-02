import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

const DeviceInfoDescriptionPair = ({label, value}) => (
  <div className="description-list__pair-wrapper">
    <dt className="description-list__term">{label}</dt>
    <dd className="description-list__description">{value}</dd>
  </div>
);

DeviceInfoDescriptionPair.propTypes = propTypes;

export default DeviceInfoDescriptionPair;
