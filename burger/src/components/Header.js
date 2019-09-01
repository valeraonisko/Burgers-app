import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { MAIN_PAGE_NO, BURGER_PAGE_NO, ORDER_PAGE_NO } from '../redux/actions';


export default class Header extends Component {

  render () {
    const { pageNo, burgerSelected, clickMenu, clickBurger, clickOrder } = this.props;

    const menuItem = (pageNo === MAIN_PAGE_NO) ?
       (<NavLink href="#" active onClick={clickMenu}>Burger menu</NavLink>) :
       (<NavLink href="#" onClick={clickMenu}>Burger menu</NavLink>);

    const burgerItem = burgerSelected ? (pageNo === BURGER_PAGE_NO) ?
       (<NavLink href="#" active onClick={() => clickBurger(burgerSelected.id)}>{burgerSelected.title}</NavLink>) :
       (<NavLink href="#" onClick={() => clickBurger(burgerSelected.id)}>{burgerSelected.title}</NavLink>) : null;
    const burgerNavItem = burgerSelected ? (<NavItem>{burgerItem}</NavItem>) : null;

    const orderItem = pageNo === ORDER_PAGE_NO ?
      (<NavLink href="#" active onClick={clickOrder}>Order</NavLink>) :
      (<NavLink href="#" onClick={clickOrder}>Order</NavLink>);

    return (
      <header className="main-header">
        <Navbar expand="md" color="dark" dark>
          <Nav navbar className="mr-auto">
            <NavbarBrand href="/">Burgers</NavbarBrand>
            <NavItem>
              {menuItem}
            </NavItem>
            {burgerNavItem}
            <NavItem>
              {orderItem}
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }

}
