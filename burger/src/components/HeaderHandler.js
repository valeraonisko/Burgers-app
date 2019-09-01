import {connect} from 'react-redux';
import {clickOrder, clickBurger} from '../redux/actions';
import Header from './Header';
import {selectBurgerSelected} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    burgerSelected: selectBurgerSelected(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    clickBurger: () => dispatch(clickBurger()),
    clickOrder: () => dispatch(clickOrder())
  };
};

const HeaderHandler = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderHandler;
