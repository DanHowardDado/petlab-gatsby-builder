import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: #213F4E;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  list-style: none;

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
    ::after {
      width: 100%;
    }
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 10.5em;
  display: contents;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  display: grid;
  font-size: 16px;
  font-weight: 500;
  &:first-child {
    padding: 0.8em;
  }
`;

export const ListItem = styled(Link)`

  display: inline-block;
  position: relative;
  white-space: nowrap;
  list-style: none;
  text-decoration: none;
  margin-bottom: 0.8em;
  color: #437794;
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

`;