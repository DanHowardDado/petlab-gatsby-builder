import styled from '@emotion/styled'

export const Main = styled("div")`
  font-family: sans-serif;
  background: #fff;
  height: 100vh;
`;

export const DropDownContainer = styled.div`
  width: 12.5em;
  margin: 0 auto;
  box-shadow: 0px 0px 1px #437794;
  padding: 80px;

  @media (min-width: 1024px){
      display: none;
  }
`;

export const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 16px;
  color: #213F4E;
`;