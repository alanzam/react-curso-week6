import React from 'react';
import PropTypes from 'prop-types';

class TopBar extends React.Component {
  render() {
    const style = {
      marginBottom: 0
    };
    return (
      <div className="row border-bottom">
          <nav className="navbar navbar-static-top" style={style}>
              <ul className="nav navbar-top-links navbar-right">
                  <li>
                      <span className="m-r-sm text-muted welcome-message">SHOPPING CART</span>
                  </li>
                  <li>
                      <a className="dropdown-toggle count-info">
                          <i className="fa fa-envelope"></i>
                          { this.props.cartItems > 0 ? <span className="label label-warning">{this.props.cartItems}</span> : null }
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
    );
  }
}

TopBar.propTypes = {
  cartItems: PropTypes.number.isRequired
};

export default TopBar;
