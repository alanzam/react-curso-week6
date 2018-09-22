import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
          <div className="sidebar-collapse">
              <ul className="nav metismenu" id="side-menu">
        				<li className="active"><a>Products grid</a></li>
        				<li><a>Products list</a></li>
        				<li><a>Product edit</a></li>
        				<li><a>Product detail</a></li>
        				<li><a>Cart</a></li>
        				<li><a>Orders</a></li>
        				<li><a>Credit Card form</a></li>
              </ul>
          </div>
      </nav>
    );
  }
}

NavBar.propType = {
  currentRoute: PropTypes.string.isRequired
}

export default NavBar;
