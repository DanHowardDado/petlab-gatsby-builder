import React from "react"
import {
  NavItem,
  CartCounter,
  CartIconWrap,
} from './styles'
import Img from "gatsby-image"
import DropdownItem from "./dropdownItem/index";


const NavbarLinks = ({navlinks}) => {

  return (
    <>
        {navlinks.map(link => (
            <DropdownItem key={link.title} name={link.title} routeList={link.sublinks}></DropdownItem>
        ))}
      {/* <NavItem to="/shopify/cart">
        <CartCounter>1</CartCounter>
        <CartIconWrap>
          <Img fixed={data.file.childImageSharp.fixed} alt="cart" />
        </CartIconWrap>
      </NavItem> */}
    </>
  );
}

export default NavbarLinks