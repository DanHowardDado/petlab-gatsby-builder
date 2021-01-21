import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import {
    Main,
    DropDownContainer,
} from './styles'
import HamburgerLink from './HamburgerLink'

const HamburgerLinks = ({navlinks}) => {

    
    return (
        <Main>
            <DropDownContainer>
                {navlinks.map(link => (
                    <HamburgerLink key={link.title} name={link.title} routeList={link.sublinks}></HamburgerLink>
                ))}
            </DropDownContainer>
        </Main>
    );
}

export default HamburgerLinks

