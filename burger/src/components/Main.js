import React, { Component } from 'react';
import MenuItem from './MenuItem';
import Footer from './Footer';
import HeaderHandler from './HeaderHandler';
import { Row } from 'reactstrap';
import BurgerItem from './BurgerItem';

export default class Main extends Component {
  componentDidMount() {
    this.props.loadMenu()
  }
  render () {
    const {isMenuLoaded, isError, menuMap, burgerSelected, requestError, clickBurger} = this.props;
    const menu = isMenuLoaded ?
      burgerSelected ?
        (<BurgerItem burgerSelected={burgerSelected}/>) :
        menuMap.map(menuItem => (<MenuItem {...menuItem} key={menuItem.id} clickBurger={clickBurger}/>)) :
      isError ? requestError : "menu is loading...";

    return (
      <div className="main">
        <HeaderHandler />
        <main>
          <Row>
            {menu}
          </Row>
        </main>
        <Footer />
      </div>
    );
  }

}
