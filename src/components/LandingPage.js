import React, { Component } from 'react';

import HeaderComponent from './Header';
import PostList from './PostList';

class LandingPage extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <PostList />
      </>
    );
  }
}

export default LandingPage;
