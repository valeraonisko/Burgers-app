export const MENU_LOAD = 'menu_load';
export const MENU_ERROR = 'menu_error';

export const MENU_RECEIVED = 'menu_received';


export const CLICK_BURGER = 'click_burger';
export const CLICK_ORDER = 'click_order';


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

export function clickBurger(id) {
  return {
    type: CLICK_BURGER,
    payload: id
  };
}

export function clickOrder() {
  return {
    type: CLICK_ORDER
  };
}
