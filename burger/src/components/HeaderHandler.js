import {connect} from 'react-redux';
import {clickMenu, clickBurger, clickOrder} from '../redux/actions';
import Header from './Header';
import {selectPageNo, selectBurgerSelected} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    pageNo: selectPageNo(state),
    burgerSelected: selectBurgerSelected(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    clickMenu: () => dispatch(clickMenu()),
    clickBurger: (id) => dispatch(clickBurger(id)),
    clickOrder: () => dispatch(clickOrder())
  };
};

const HeaderHandler = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderHandler;
