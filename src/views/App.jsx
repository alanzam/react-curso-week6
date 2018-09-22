import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../containers/NavBar';
import BreadCrumbs from '../containers/BreadCrumbs';
import TopBar from '../containers/TopBar';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <NavBar />
        <div id="page-wrapper" className="gray-bg">
          <TopBar />
          <BreadCrumbs />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
