import React from 'react';
import { connect } from 'react-redux';
import HubContent from '../../../../core/components';

class UsersView extends React.Component {
  render() {
    return (
      <HubContent>
        <h1>Hello</h1>
      </HubContent>
    )
  }
}



export default connect()(UsersView);
