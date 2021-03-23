import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NavSection = styled.nav`
  background-color: ${({ isScroll }) =>
    isScroll ? "rgba(255,0,0,0.75)" : "transparent"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  transition: all 0.5s ease;
  @media screen and (max-width: 1024px) {
    background-color: ${({ isClick, isScroll }) =>
      isClick
        ? "transparent"
        : isClick || isScroll
        ? "rgba(255,0,0,0.75)"
        : "transparent"};
  }
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 33px;
  padding-left: 33px;
`

export const LogoContainer = styled.div`
  display: flex;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ isClick }) => (isClick ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${({ isClick }) => (isClick ? "#ffffff" : "transparent")};
  }
`
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  margin-right: 10px;

  &:hover {
    border-bottom: ${({ isScroll }) =>
      isScroll ? "2px solid #000000" : "2px solid #ff0000"};
    transition: all 0.2s ease;
  }

  @media screen and (min-width: 1025px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavLink = styled(AniLink)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;

  @media screen and (max-width: 1024px) {
    text-align: center;
    padding: 0.5rem 2rem;
    margin: 0 auto;
    display: table;
    transition: all 0.3s ease-out;

    &:hover {
      color: #f00946;
      transform: scale(1.2);
      transition: all 0.3s ease;
    }
  }
`

export const NavButtonContainer = styled.li`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px;
  }
`

export const NavButton = styled.div`
  padding: 8px 16px;
  height: 100%;
  width: 80%;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
