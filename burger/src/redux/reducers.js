import {MENU_LOAD, MENU_ERROR, MENU_RECEIVED, CLICK_BURGER, CLICK_ORDER } from './actions';

const initialState = {
  menuList: null,
  menuLoading: false,
  requestError: null,

  burgerSelected: null,
  order: null
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case MENU_LOAD:
      return {
        ...state,
        menuList: null,
        menuLoading: true,
        requestError: null
      };
    case MENU_ERROR:
      return {
        ...state,
        menuList: null,
        menuLoading: false,
        requestError: `post request error: ${action.payload}`
      };
    case MENU_RECEIVED:
      return {
        ...state,
        menuLoading: false,
        menuList: action.payload
      };
    case CLICK_BURGER:
      return {
        ...state,
        burgerSelected: state.menuList.filter(burger => burger.id === action.payload)//payload = burgerId
      };
    case CLICK_ORDER:
      return {
        ...state,
        //switchTo order)
      };
    default:
      return state;
  }
}
