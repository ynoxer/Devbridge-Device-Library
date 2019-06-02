import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './userListActions';

import UserListTable from './UserListTable';
import UserListAddNewButton from './UserListAddNewButton'


class UserListPage extends React.Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { loading, users } = this.props;
    return (
      <div>
        <UserListTable loading={loading} users={users} />
        <UserListAddNewButton />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  loading: state.userList.loading,
  users: state.userList.users
})

const mapDispatchToProps = {
  ...actionCreators
}
//        

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
