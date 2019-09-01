import {MENU_LOAD, MENU_ERROR, MENU_RECEIVED,
  CLICK_MENU, CLICK_BURGER, CLICK_APPLY_BURGER, CLICK_CANCEL_BURGER, CLICK_ORDER,
  CLICK_NEW_BURGER, CLICK_FINISH_ORDER, CLICK_ADD_OPTION, CLICK_DEC_OPTION,
  MAIN_PAGE_NO, BURGER_PAGE_NO, ORDER_PAGE_NO } from './actions';

const initialState = {
  menuList: null,
  menuLoading: false,
  requestError: null,

  pageNo: MAIN_PAGE_NO,
  burgerSelected: null,
  optionsSelected: null,
  order: []
};

function getBurgerOptions(options) {
    return options.map(opt => {
      return {qt: opt.defqt, ...opt}
    });
}

function updateOptionsSelected(options, code, qt) {
   return options.map(opt => {
     if (opt.code === code) {
       const new_qt = opt.qt + qt;
       if ((new_qt >= 0) && (new_qt <= opt.maxqt)) {
         return {...opt, qt: new_qt};
       }
       return opt;
     }
     return opt;
   })
}

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
        menuList: action.payload,
        pageNo: MAIN_PAGE_NO
      };
    case CLICK_MENU:
        return {
          ...state,
          pageNo: MAIN_PAGE_NO
        };
    case CLICK_BURGER:
      const  burgerSelected =  state.menuList.find(burger => burger.id === action.payload);
      // console.log(burgerSelected);
      return {
        ...state,
        burgerSelected: burgerSelected,
        optionsSelected: getBurgerOptions(burgerSelected.opts),
        pageNo: BURGER_PAGE_NO
      };
    case CLICK_APPLY_BURGER:
      const item = {no: 1+state.order.length, burger: state.burgerSelected, options: state.optionsSelected};
      const newOrder = state.order;
      newOrder.push(item);

      return {
        ...state,
        pageNo: ORDER_PAGE_NO,
        order: newOrder,
        burgerSelected: null,
        optionsSelected: null
      };
    case CLICK_CANCEL_BURGER:
      return {
        ...state,
        pageNo: MAIN_PAGE_NO,
        burgerSelected: null,
        optionsSelected: null
      };
    case CLICK_NEW_BURGER:
      return {
        ...state,
        pageNo: MAIN_PAGE_NO,
        burgerSelected: null,
        optionsSelected: null
      };

    case CLICK_ADD_OPTION:
      return {
        ...state,
        optionsSelected: updateOptionsSelected(state.optionsSelected, action.payload, 1)
      };

    case CLICK_DEC_OPTION:
      return {
        ...state,
        optionsSelected: updateOptionsSelected(state.optionsSelected, action.payload, -1)
      };

    case CLICK_FINISH_ORDER:
      return {
        ...state,
        pageNo: MAIN_PAGE_NO,
        burgerSelected: null,
        optionsSelected: null,
        order: []
        };
    case CLICK_ORDER:
      return {
        ...state,
        pageNo: ORDER_PAGE_NO
      };
    default:
      return state;
  }
}
