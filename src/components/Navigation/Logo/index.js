import React from "react"
import { LogoWrap } from './styles'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(name: { eq: "logo" }, extension: { eq: "png" }) {
  //       childImageSharp {
  //         fluid(quality: 80) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <LogoWrap as={Link} to="/">
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="logo" /> */}
    </LogoWrap>
  )
}

export default Logo
