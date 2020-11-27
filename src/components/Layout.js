// React
import React from 'react';

// Components
import Header from './Header';
import Stories from './Stories';

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <Stories />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
