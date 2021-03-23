import React, { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"
import { RiMenu3Line } from "react-icons/ri"
import { IconContext } from "react-icons/lib"
import logo from "../../images/Logo/logo.svg"
import {
  NavSection,
  NavContainer,
  LogoContainer,
  NavMenu,
  NavItem,
  NavLink,
  NavButtonContainer,
  NavButton,
  MobileIcon,
} from "./NavElements.js"
import { Button } from "../ButtonElements"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Nav = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  const isScrolling = () => {
    if (window.pageYOffset > 0) {
      setScroll(true)
      setClick(false)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    showButton()
    isScrolling()
    window.addEventListener("resize", showButton)
    window.addEventListener("scroll", isScrolling)
    return () => {
      window.removeEventListener("resize", showButton)
      window.addEventListener("scroll", isScrolling)
    }
  }, [])

  const ACTIVE_STYLE = {
    borderBottom: scroll ? "4px solid #000000" : "4px solid #ff0000",
  }

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <NavSection isClick={click} isScroll={scroll}>
          <NavContainer>
            <LogoContainer>
              <AniLink
                cover
                duration={0.8}
                bg="#ff0000"
                direction="left"
                to="/"
              >
                <img src={logo} alt="spark" />
              </AniLink>
            </LogoContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <RiMenu3Line />}
            </MobileIcon>
            <NavMenu isClick={click}>
              <NavItem isScroll={scroll} onClick={() => setClick(false)}>
                <NavLink
                  cover
                  duration={0.8}
                  bg="#ff0000"
                  direction="right"
                  to="/help"
                  activeStyle={ACTIVE_STYLE}
                >
                  Help
                </NavLink>
              </NavItem>
              <NavItem isScroll={scroll} onClick={() => setClick(false)}>
                <NavLink
                  cover
                  duration={0.8}
                  bg="#ff0000"
                  direction="right"
                  activeStyle={ACTIVE_STYLE}
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem isScroll={scroll} onClick={() => setClick(false)}>
                <NavLink
                  cover
                  duration={0.8}
                  bg="#ff0000"
                  direction="right"
                  activeStyle={ACTIVE_STYLE}
                  to="/about"
                >
                  About
                </NavLink>
              </NavItem>
              <NavButtonContainer>
                {button ? (
                  <NavButton>
                    <Button isScroll={scroll} nav>
                      Preorder
                    </Button>
                  </NavButton>
                ) : (
                  <NavButton>
                    <Button mobile>Preorder</Button>
                  </NavButton>
                )}
              </NavButtonContainer>
            </NavMenu>
          </NavContainer>
        </NavSection>
      </IconContext.Provider>
    </>
  )
}

export default Nav
