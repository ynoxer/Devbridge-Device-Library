import React from 'react';
import ReactModal from 'simple-react-modal';
import PropTypes from 'prop-types';

const propTypes = {
  show: PropTypes.bool.isRequired
};

const UserUpdateModal = ({show, close}) => (

  <div> 
    <ReactModal 
      containerStyle={{margin: '3% auto'}}
      show={show}
      closeOnOuterClick={true}
      onClose={close}
    > 
      <div>
        <dl className="description-list">
          <h1 className="description-list__title">Update user details</h1>

          <dt className="description-list__term">Name:</dt>
          <label htmlFor="username-field" className="hidden-label">Name</label>
          <input type="text" defaultValue="John Snow" className="input-field" id="name-field" />

          <dt className="description-list__term">Slack Name:</dt>
          <label htmlFor="slackname-field" className="hidden-label">Slack name</label>
          <input type="text" defaultValue="LordCommander2" className="input-field" id="slackname-field" />

          <dt className="description-list__term">Location:</dt>
          <label htmlFor="location-select" className="hidden-label">All categories</label>
          <select className="input-select form-control" id="location-select">
            <option>Vilnius</option>
            <option>Kaunas</option>
            <option>Chicago</option>
          </select>
          <br/>

          <dt className="description-list__term">Old password:</dt>
          <label htmlFor="old-pass-field" className="hidden-label">Old password</label>
          <input type="password" className="input-field" id="old-pass-field" />

          <dt className="description-list__term">New password:</dt>
          <label htmlFor="new-pass-field" className="hidden-label">New password</label>
          <input type="password" className="input-field" id="new-pass-field" />

          <dt className="description-list__term">Repeat new password:</dt>
          <label htmlFor="rep-new-pass-field" className="hidden-label">Repeat new password</label>
          <input type="password" className="input-field" id="rep-new-pass-field" />
        </dl>
      </div>

      <div>
        <button className="button button--save_user_update">  
        SAVE 
        </button>
      </div> 
    </ReactModal>
  </div>
)

export default UserUpdateModal;