import React from 'react';

const DeviceInfoCustody = ({custody, email}) => (
  <span className="description-list__description-content-wrapper">
    {custody} (<a href={"mailto:" + {email}}>{email}</a>)
    <span className="tooltip__wrapper tooltip__wrapper--absolutely-positioned">
      <span className="tooltip tooltip--margin-left">
        <span className="tooltip__icon"></span>
        <span className="tooltip__text">
          <a href="#nolink">Request custody update</a>
        </span>
      </span>
    </span>
  </span>
);

export default DeviceInfoCustody;
