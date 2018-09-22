import React from 'react';
import PropTypes from 'prop-types';

class ProductBox extends React.Component {
  render() {
    return (
      <div className="col-md-3">
          <div className="ibox">
              <div className="ibox-content product-box">
                  <div className="product-imitation">
                      { this.props.imageLink ? <img src={this.props.imageLink} /> : "[ INFO ]" }
                  </div>
                  <div className="product-desc">
                      <span className="product-price">
                          {this.props.price}
                      </span>
                      <small className="text-muted">{this.props.category}</small>
                      <a className="product-name">{this.props.name}</a>
                      <div className="small m-t-xs">
                          {this.props.description}
                      </div>
                      <div className="m-t text-righ">
                          <a className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

ProductBox.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  imageLink: PropTypes.string
}

export default ProductBox;
