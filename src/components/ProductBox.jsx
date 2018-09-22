import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductBox extends React.Component {
  render() {
    const style = {
      width: '200px'
    };
    return (
      <div className="col-md-3">
          <div className="ibox">
              <div className="ibox-content product-box">
                  <div className="product-imitation">
                      { this.props.imageLink ? <img style={style} src={this.props.imageLink} /> : "[ INFO ]" }
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
                          <a onClick={() => this.props.addToCart(this.props.name)} className="btn btn-xs btn-outline btn-primary">Add to Cart <i className="fa fa-shopping-cart"></i> </a>
                      </div>
                      <div className="m-t text-righ">
                          <Link to={`/Edit/${this.props.name}`}  className="btn btn-xs btn-outline btn-primary">Edit <i className="fa fa-left-arrow"></i> </Link>
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
  addToCart: PropTypes.func.isRequired,
  description: PropTypes.string,
  imageLink: PropTypes.string
}

export default ProductBox;
