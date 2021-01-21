import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import HamburgerLinks from "./HamburgerLinks"
import { Navbar, Toggle, Navbox, Hamburger } from './styles'
import useWindowSize from "./useWindowSize";

export const Navigation = ({Navlinks}) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const windowSize = useWindowSize();

  return (
    <Navbar>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {(windowSize === 'md' || windowSize === 'sm') && navbarOpen ? (
        <Navbox >
          <HamburgerLinks navlinks={Navlinks} />
        </Navbox>
      ) : (
          <Navbox open>
            <NavbarLinks navlinks={Navlinks}/>
          </Navbox>
        )}
    </Navbar>
  )
}

export default Navigation
