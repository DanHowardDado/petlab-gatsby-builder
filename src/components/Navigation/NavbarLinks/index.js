import React from "react"
import {
  NavItem,
  CartCounter,
  CartIconWrap,
} from './styles'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import DropdownItem from "./dropdownItem/index";


const NavbarLinks = (props) => {

  console.log(props)

  //ImageWrapper might be better here
  // const data = useStaticQuery(graphql`
  //     query {
  //       file(name: { eq: "cart" }, extension: { eq: "png" }) {
  //         childImageSharp {
  //           fixed(width: 40, quality: 80) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   `)

  // dummy data for now - will get from contentful
  const productList = [{ 'to': '/product/all', 'name': 'View All' }];
  const categoryList = [{ 'to': '/collection/Dental', 'name': 'Dental' }, { 'to': '/collection/Joint%20Care', 'name': "Joint Care" }];
  const petList = [{ 'to': '/pet/dog', 'name': 'Dog' }, { 'to': '/pet/cat', 'name': 'Cat' }];
  const aboutUsList = [{ 'to': '/story', 'name': 'Our Story' }, { 'to': '/testimonials', 'name': 'Our Testimonials' }];
  const blogList = [{ 'to': '/blogs', 'name': 'Blogs and Guides' }, { 'to': '/authors', 'name': 'Meet The Authors' }];
  const accountList = [{ 'to': '/user/account', 'name': 'My Account' }, { 'to': '/user/orders', 'name': 'Orders And Returns' }, { 'to': '/user/pets', 'name': 'My Pets' }, { 'to': '/user/subscriptions', 'name': 'My Subscriptions' }];
  const helpList = [{ 'to': '/help/subscription', 'name': 'My Subscriptions' }, { 'to': '/help/orders', 'name': 'Help Centre' }];


  return (
    <>
      <DropdownItem key="productList" name={'Products'} routeList={productList}>
      </DropdownItem>
      <DropdownItem key="categoryList" name={'Shop By Category'} routeList={categoryList}>
      </DropdownItem>
      <DropdownItem key="petList" name={'Shop By Pet'} routeList={petList}>
      </DropdownItem>
      <DropdownItem key="aboutUsList" name={'About Us'} routeList={aboutUsList}>
      </DropdownItem>
      <DropdownItem key="blogList" name={'Our Blog'} routeList={blogList}>
      </DropdownItem>
      <DropdownItem key="accountList" name={'Account'} routeList={accountList}>
      </DropdownItem>
      <DropdownItem key="helpList" name={'Help'} routeList={helpList}>
      </DropdownItem>
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
