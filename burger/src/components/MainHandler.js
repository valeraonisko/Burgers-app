import {connect} from 'react-redux';
import {loadMenu, clickBurger, clickApplyBurger, clickCancelBurger,
  clickAddOption, clickDecOption,
  clickNewBurger, clickOrder, clickFinishOrder} from '../redux/actions';
import Main from './Main';
import {selectPageNo, selectMenuMap, selectBurgerSelected, selectOptionsSelected, selectBurgerOrder,
     selectIsMenuLoaded, selectIsError, selectRequestError} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    pageNo: selectPageNo(state),
    isMenuLoaded: selectIsMenuLoaded(state),
    isError: selectIsError(state),
    menuMap: selectMenuMap(state),
    burgerSelected: selectBurgerSelected(state),
    optionsSelected: selectOptionsSelected(state),
    burgerOrder: selectBurgerOrder(state),
    requestError: selectRequestError(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadMenu: () => dispatch(loadMenu()),
    clickBurger: (id) => dispatch(clickBurger(id)),
    clickAddOption: (code) => dispatch(clickAddOption(code)),
    clickDecOption: (code) => dispatch(clickDecOption(code)),
    clickApplyBurger: () => dispatch(clickApplyBurger()),
    clickCancelBurger: () => dispatch(clickCancelBurger()),
    clickNewBurger: () => dispatch(clickNewBurger()),
    clickFinishOrder: () => dispatch(clickFinishOrder()),
    clickOrder: () => dispatch(clickOrder())
  };
};

const MainHandler = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainHandler;
