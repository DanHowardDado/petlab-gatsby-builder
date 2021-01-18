import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #293F4C;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #293F4C;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #293F4C;
  padding: -1 10px;
  font-size: 1.5rem;
  float: right;
  margin: -10px;
  z-index: 20;
`
export const CartIconWrap = styled.div`
  margin: auto 0;
  flex: 0 1 80px;
  position: relative;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 40px;
  }
`