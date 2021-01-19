import styled from '@emotion/styled'
import Link from 'gatsby-link'

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  padding: 20px 10px;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 25%;
  max-width: 290px;
  margin-bottom: 35px;
  transition: all 0.3s ease 0s;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px #00000033; 
`

export const Img = styled.img`
  max-width: 270px;
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 21px;
  line-height: 31px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #213F4E;
  margin-top: 10px;
`

export const Subtitle = styled.span`
  letter-spacing: 0px;
  font-size: 18px;
  line-height: 27px;
  color: #213F4E;
  height: 60px;
`

export const PriceTag = styled.span`
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0px;
  color: #C95F3D;
  font-weight: 600;
`

export const ShopButton = styled.a`
  text-decoration: none;
  margin-top:10px;
  background-color: #C95F3D;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
  color: #FFFDF1;
  padding: 6px 0 3px;
  transition: all 0.3s ease 0s;
`

