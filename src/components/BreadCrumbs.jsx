import React from 'react';
import PropTypes from 'prop-types';

class BreadCrumbs extends React.Component {
  render() {
    const breadcrumbs = this.props.currentRoute.split('/');
    return (
      <div className="row wrapper border-bottom white-bg page-heading">
          <div className="col-lg-10">
              <h2>{breadcrumbs[breadcrumbs.length -1]}</h2>
              <ol className="breadcrumb">
                  {
                    breadcrumbs.map((route, index) => (
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
  currentRoute: PropTypes.string.isRequired
};

export default BreadCrumbs;