import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import HamburgerLinks from "./HamburgerLinks"
import Logo from "./Logo/index"
import { Navbar, Toggle, Navbox, Hamburger } from './styles'
import useWindowSize from "./useWindowSize";

export const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const windowSize = useWindowSize();

  return (
    <Navbar>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {(windowSize === 'md' || windowSize === 'sm') && navbarOpen ? (
        <Navbox >
          <HamburgerLinks />
        </Navbox>
      ) : (
          <Navbox open>
            <NavbarLinks hamburger={navbarOpen} />
          </Navbox>
        )}
    </Navbar>
  )
}

export default Navigation
