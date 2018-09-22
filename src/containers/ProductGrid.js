import ProductGrid from '../components/ProductGrid';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  productList: state.productList
});

const mapDispatchToActions = (dispatch, ownProps) => ({
  addToCart: (productName) => {dispatch(ActionCreators.addToCart(productName))}
});

export default connect(mapStateToProps, mapDispatchToActions)(ProductGrid);
