import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import {
    Main,
    DropDownContainer,
} from './styles'
import HamburgerLink from './HamburgerLink'

const HamburgerLinks = () => {

    // const data = useStaticQuery(graphql`
    //     query NavLinks {
    //         allContentfulNavbarLinks {
    //             edges {
    //                 node {
    //                     id
    //                     order
    //                     linkTitle
    //                     sublinks
    //                 }
    //             }
    //         }
    //     }
    //     `
    // );

    // const links = data.allContentfulNavbarLinks.edges.map(link => ({
    //     title: link?.node?.linkTitle,
    //     sublinks: link?.node?.sublinks,
    //     order: link?.node?.order,
    // }));

    //ensure links to display in increasing order along navbar
    // links.sort((a, b) => (a.order > b.order) ? 1 : -1)

    return (
        <Main>
            {/* <DropDownContainer>
                {links ? (
                    links.map((link, i) => (
                        < HamburgerLink key={i} data={
                            {
                                title: link?.title,
                                sublinks: link?.sublinks,
                            }
                        }></HamburgerLink>
                    )
                    )
                ) : (
                        <p>No Products found!</p>
                    )}
            </DropDownContainer> */}
        </Main>
    );
}

export default HamburgerLinks

