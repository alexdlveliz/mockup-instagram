// React
import React from 'react';

// Components
import Header from './Header';
import Stories from './Stories';

// Assets
import './styles/Layout.scss';

function Layout(props) {
  return (
    <React.Fragment>
      <section className="upper-section">
        <Header />
        <Stories />
      </section>
      <section className="lower-section">{props.children}</section>
    </React.Fragment>
  );
}

export default Layout;
