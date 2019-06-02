import React from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { DropDownMenu, ActionItem, DropDownDirection } from 'react-dropdown-advanced';
import UserUpdateModal from './UserUpdateModal';
import * as logoutActions from './Auth/authActions'
import { connect } from 'react-redux'

import { filterSearch } from './Filter/filterActions';

const initialsFromName = (name) => name.split(' ').map(part => part[0]).join('');

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    let items = [];
    let item = new ActionItem("A", "Edit User");
    items.push(item);

    items.push(new ActionItem("B", "Logout"));
    this.state = {
      dropDownItems: items,
      modalOpen: false,
      searchQuery: ''
    };
  }

  onClick(item){
    if (item.key === "A") {
      this.setState({modalOpen: true});
    } else {
      console.log('Logout');
      this.props.logout();

    }
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  handleSearchQueryChange = (e) => {
    this.setState({searchQuery: e.target.value})
  }

  handleSearch = () => {
    this.props.filterSearch(this.state.searchQuery);
    browserHistory.push('/');
    this.setState({searchQuery: ''})
  }

  handleSearchInputKeyPress = (e) =>
    e.key === 'Enter' && this.handleSearch();

  render(){
    const renderForLoggedIn = () => [
      <div key="search-with-select" className="search-with-select">
        <label htmlFor="search-field" className="hidden-label">Search for device</label>
        <input type="search"
          value={this.state.searchQuery}
          onChange={this.handleSearchQueryChange}
          onKeyPress={this.handleSearchInputKeyPress}
          placeholder="Search for device"
          id="search-field"
          className="input-field input-field--search search-with-select__search-field"
        />
        <button
          disabled={!this.state.searchQuery} 
          className="button-search"
          onClick={this.handleSearch}
        />
      </div>,
      <span key="page-header-divider" className="page-header__divider"></span>,
      <div key="page-header-ctrl" className="page-header__control page-header__control--with-dropdown-arrow">
        <button className="page-header__control-button" >
            <span
              className="page-header__control-text"
              style={{fontSize: this.props.user.userName.split(' ').length > 2 ? 14 : 20}}
            >
              {initialsFromName(this.props.user.userName)}
            </span>
            <span className="page-header__control-arrow"></span>
            <DropDownMenu items={this.state.dropDownItems} onClick={this.onClick.bind(this)} direction={DropDownDirection.DownLeft}/>
        </button>
        <UserUpdateModal
          show={this.state.modalOpen}
          close={this.closeModal.bind(this)}
        />
      </div>
    ];

    return (
      <header className="page-header">
        <div className="page-frame">
          <div className="page-header__content">
            <div className="page-header__logo">
              <img src="/images/devbridge-logo.png" alt="d3evbridge logo" />
            </div>
            {this.props.isLoggedIn && renderForLoggedIn()}

          </div>
        </div>
      </header>
    )
  }
  
}

const mapDispatchToProps = {
  ...logoutActions,
  filterSearch
}

export default connect(null, mapDispatchToProps)(Header);
