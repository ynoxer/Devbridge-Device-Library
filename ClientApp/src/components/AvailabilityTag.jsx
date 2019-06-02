import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  available: PropTypes.bool.isRequired,
  list_tag: PropTypes.bool,
};

const AvailabilityTag = ({available, list_tag=false}) => (
  <span
    className={`${list_tag ? 'device-card__tag' : ''} availability-tag availability-tag--${available ? 'available' : 'unavailable'}`}
  >
    {available ? 'Available' : 'Unavailable'}
  </span>
);

AvailabilityTag.propTypes = propTypes;

export default AvailabilityTag;
