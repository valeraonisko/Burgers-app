import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {

  render () {
    const { burgerSelected, clickBurger, clickOrder } = this.props;
    const burgerItem = burgerSelected ? (
      <NavItem>
        <NavLink href="#" onClick={clickBurger}>{burgerSelected.title}</NavLink>
      </NavItem>
      ) : null;
    return (
      <header className="main-header">
        <Navbar expand="md" color="light" light>
          <Nav navbar className="mr-auto">
            <NavbarBrand href="/">Burgers</NavbarBrand>
            {burgerItem}
            <NavItem>
              <NavLink href="#" onClick={clickOrder}>Order</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }

}
