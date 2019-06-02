import React from 'react';
import PropTypes from 'prop-types';

const OfficeInfoMap = ({query}) => (
  <div className="office-info__map">
    <iframe
      width="600"
      height="450"
      frameborder="0" style={{border:0}}
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_EMBED_API_KEY}&q=${query}`} allowfullscreen>
    </iframe>
  </div>
);

export default OfficeInfoMap;
