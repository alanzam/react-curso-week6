import TopBar from '../components/TopBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  cartItems: state.shoppingCart.length
});

export default connect(mapStateToProps)(TopBar);
