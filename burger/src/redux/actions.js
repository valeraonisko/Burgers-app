export const MENU_LOAD = 'menu_load';
export const MENU_ERROR = 'menu_error';

export const MENU_RECEIVED = 'menu_received';

export const CLICK_MENU = 'click_menu';
export const CLICK_BURGER = 'click_burger';
export const CLICK_APPLY_BURGER = 'click_apply_burger';
export const CLICK_CANCEL_BURGER = 'click_cancel_burger';

export const CLICK_ADD_OPTION = 'click_add_option';
export const CLICK_DEC_OPTION = 'click_dec_option';

export const CLICK_NEW_BURGER = 'click_new_burger';
export const CLICK_FINISH_ORDER = 'click_finish_order';

export const CLICK_ORDER = 'click_order';

export const MAIN_PAGE_NO = 0
export const BURGER_PAGE_NO = 1
export const ORDER_PAGE_NO = 2

const serverUrl = 'http://localhost:3001';

export const setLoadMenu = () => {
  return {
    type: MENU_LOAD
  }
}

export const errorMenu = (err) => {
  return {
    type: MENU_ERROR,
    payload: err
  }
}

export const loadMenu = () => (dispatch) => {
  dispatch(setLoadMenu());
  fetch(`${serverUrl}/menu`)
    .then(response => {
      if(response.ok) {
        response.json().then(menuList => {
          dispatch(receiveMenu(menuList))
        })
      } else {
        console.log('error load menu');
        dispatch(errorMenu('error load menu'))
      }
    })
    .catch(err => {
    console.log('error load menu');
    dispatch(errorMenu(err.message))
    })
};


export const receiveMenu = (menuList) => {
  return {
    type: MENU_RECEIVED,
    payload: menuList
  }
}

export function clickMenu() {
  return {
    type: CLICK_MENU
  };
}

export function clickBurger(id) {
  return {
    type: CLICK_BURGER,
    payload: id
  };
}

export function clickAddOption(code) {
  return {
    type: CLICK_ADD_OPTION,
    payload: code
  };
}

export function clickDecOption(code) {
  return {
    type: CLICK_DEC_OPTION,
    payload: code
  };
}

export function clickApplyBurger() {
  return {
    type: CLICK_APPLY_BURGER
  };
}

export function clickCancelBurger() {
  return {
    type: CLICK_CANCEL_BURGER
  };
}

export function clickNewBurger() {
  return {
    type: CLICK_NEW_BURGER
  };
}

export function clickFinishOrder() {
  return {
    type: CLICK_FINISH_ORDER
  };
}

export function clickOrder() {
  return {
    type: CLICK_ORDER
  };
}
