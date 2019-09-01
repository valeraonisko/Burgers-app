import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './Main.css';


import HeaderHandler from './HeaderHandler';
import MenuItem from './MenuItem';
import Footer from './Footer';
import BurgerItem from './BurgerItem';
import BurgerOrder from './BurgerOrder';
import { MAIN_PAGE_NO, BURGER_PAGE_NO, ORDER_PAGE_NO } from '../redux/actions';

export default class Main extends Component {
  componentDidMount() {
    this.props.loadMenu()
  }
  render () {
    const {pageNo, isMenuLoaded, isError, menuMap,
      burgerSelected, optionsSelected, burgerOrder, requestError,
      clickAddOption, clickDecOption,
      clickApplyBurger, clickCancelBurger, clickNewBurger,
      clickFinishOrder, clickBurger} = this.props;

    let mainPage = "Undefined page no: {pageNo}";
    if (pageNo === MAIN_PAGE_NO) {
       if (isMenuLoaded) {
          const menu = menuMap.map(menuItem => (<MenuItem {...menuItem} key={menuItem.id} clickBurger={clickBurger}/>));
          mainPage = (<Row>{menu}</Row>)
        } else {
          mainPage = isError ? requestError : "Burger menu is loading..."
        }
    } else
    if (pageNo === BURGER_PAGE_NO) {
       if (isMenuLoaded) {
         mainPage = burgerSelected ? (<BurgerItem burgerSelected={burgerSelected} optionsSelected={optionsSelected}
           clickAddOption={clickAddOption} clickDecOption={clickDecOption}
           burgerApplyClick={clickApplyBurger} burgerCancelClick={clickCancelBurger}/>) : "error: Burger was not selected";
       } else {
         mainPage = isError ? requestError : "Burger menu is loading...";
       }
    } else
    if (pageNo === ORDER_PAGE_NO) {
       mainPage = (<BurgerOrder burgerOrder={burgerOrder}
         burgerAddClick={clickNewBurger} finishOrderClick={clickFinishOrder}/>);
    }

    return (
      <div className="main">
        <HeaderHandler />
        <main>{mainPage}</main>
        <Footer />
      </div>
    );
  }

}
