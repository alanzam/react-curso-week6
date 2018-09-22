import React from 'react';
import PropTypes from 'prop-types';

class BreadCrumbs extends React.Component {
  render() {
    return (
      <div className="row wrapper border-bottom white-bg page-heading">
          <div className="col-lg-10">
              <h2>{this.props.pageName}</h2>
              <ol className="breadcrumb">
                  {
                    this.props.currentRoute.split('/').map((route, index) => (
                      <li key={index} ><a>{route}</a></li>
                    ))
                  }
              </ol>
          </div>
      </div>
    );
  }
}

BreadCrumbs.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired
};

export default BreadCrumbs;
