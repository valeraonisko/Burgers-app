import {connect} from 'react-redux';
import {loadMenu, clickBurger, clickOrder} from '../redux/actions';
import Main from './Main';
import {selectMenuMap, selectBurgerSelected, selectIsMenuLoaded, selectIsError, selectRequestError} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    isMenuLoaded: selectIsMenuLoaded(state),
    isError: selectIsError(state),
    menuMap: selectMenuMap(state),
    burgerSelected: selectBurgerSelected(state),
    requestError: selectRequestError(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadMenu: () => dispatch(loadMenu()),
    clickBurger: () => dispatch(clickBurger(selectBurgerSelected.id)),
    clickOrder: () => dispatch(clickOrder())
  };
};

const MainHandler = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainHandler;
