import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>
        // <span className="font-weight-bolder">LOGO</span>
      </NavbarBrand>
    </Navbar>
  );
}

export default Header;
