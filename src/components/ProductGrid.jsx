import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from '../components/ProductBox';

class ProductGrid extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row">
          {this.props.productList.map((product, index) => (
            <ProductBox
              key={index}
              name={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
              imageLink={product.imageLink}
              addToCart={this.props.addToCart}
              />
          ))}
        </div>
      </div>
    );
  }
}

ProductGrid.propTypes = {
  productList: PropTypes.array.isRequired
}

export default ProductGrid;
