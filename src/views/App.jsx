import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import BreadCrumbs from '../components/BreadCrumbs';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <NavBar
          currentRoute={this.props.currentRoute}
          />
        <div id="page-wrapper" className="gray-bg">
          <TopBar
            cartItems={this.props.cartItems}
            />
          <BreadCrumbs
              pageName={this.props.pageName}
              currentRoute={this.props.currentRoute}
            />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired
}

export default App;
