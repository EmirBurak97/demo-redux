import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,

} from "reactstrap";
import CartSummary from "../cart/CartSummary";

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Cart OP</NavbarBrand>
        <CartSummary></CartSummary>
      </Navbar>
    </div>
  );
}

export default Navi;
