import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import {
    Main,
    DropDownContainer,
} from './styles'
import HamburgerLink from './HamburgerLink'

const HamburgerLinks = () => {

    const productList = [{ 'to': '/product/all', 'name': 'View All' }];
    const categoryList = [{ 'to': '/collection/Dental', 'name': 'Dental' }, { 'to': '/collection/Joint%20Care', 'name': "Joint Care" }];
    const petList = [{ 'to': '/pet/dog', 'name': 'Dog' }, { 'to': '/pet/cat', 'name': 'Cat' }];
    const aboutUsList = [{ 'to': '/story', 'name': 'Our Story' }, { 'to': '/testimonials', 'name': 'Our Testimonials' }];
    const blogList = [{ 'to': '/blogs', 'name': 'Blogs and Guides' }, { 'to': '/authors', 'name': 'Meet The Authors' }];
    const accountList = [{ 'to': '/user/account', 'name': 'My Account' }, { 'to': '/user/orders', 'name': 'Orders And Returns' }, { 'to': '/user/pets', 'name': 'My Pets' }, { 'to': '/user/subscriptions', 'name': 'My Subscriptions' }];
    const helpList = [{ 'to': '/help/subscription', 'name': 'My Subscriptions' }, { 'to': '/help/orders', 'name': 'Help Centre' }];

    return (
        <Main>
            <DropDownContainer>
                < HamburgerLink key="productList" name={'Products'} routeList={productList}></HamburgerLink>
                < HamburgerLink key="categoryList" name={'Shop By Category'} routeList={categoryList}></HamburgerLink>
                < HamburgerLink key="petList" name={'Shop By Pet'} routeList={petList}></HamburgerLink>
                < HamburgerLink key="aboutUsList" name={'About Us'} routeList={aboutUsList}></HamburgerLink>
                < HamburgerLink key="blogList" name={'Our Blog'} routeList={blogList}></HamburgerLink>
                < HamburgerLink key="accountList" name={'Account'} routeList={accountList}></HamburgerLink>
                < HamburgerLink key="helpList" name={'Help'} routeList={helpList}></HamburgerLink>
            </DropDownContainer>
        </Main>
    );
}

export default HamburgerLinks

