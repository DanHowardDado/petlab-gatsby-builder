import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const DropdownContainer = styled.div`
    position: relative;
    margin-left: 3vw;
`
export const Menu = styled.div`
    background: #ffffff;
    color: #293F4C;
    border-radius: 4px;
    position: absolute;
    top: 50px;
    right: -40px;
    width: 200px;
    box-shadow: 0 1px 1px #293F4C;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    
    &.active {
        opacity: 1;
        visibility: visible;
    }
`

export const ToggleBtn = styled.a`
    cursor: pointer;
    font-size: 16px;
    font-family: sans-serif;
    color: #293F4C;
    white-space: nowrap;
  
    &:after {
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
    &:hover {
        color: #293F4C;
        ::after {
            width: 100%;
        }
    }

    @media (max-width: 1300px) {
        font-size: 1vw;
    }
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
`

export const ListItem = styled(Link)`
    text-decoration: none;
    color: #293F4C;
    display: inline-block;
    position: relative;
    font-family: sans-serif;
    cursor: pointer;

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
  `