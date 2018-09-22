import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
          <div className="sidebar-collapse">
              <ul className="nav metismenu" id="side-menu">
        				<li><a onClick={() => this.props.linkTo('/Grid')}>Products grid</a></li>
        				<li><a onClick={() => this.props.linkTo('/Edit')}>Products edit</a></li>
              </ul>
          </div>
      </nav>
    );
  }
}

export default NavBar;
