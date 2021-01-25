import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Select from 'react-select'

export const Container = styled.div`
  margin: 0;
`

export const Title = styled.div`
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  max-width: 1256px;
  color: #213F4E;
  margin-top: 10px;
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  padding: 20px 30px 5px 0px;
  margin-bottom: 0;
  line-height: 56px;
  text-transform: uppercase;
  display: block;
  letter-spacing: 2px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto 15px;
  clear: both;
`

export const ProductImg = styled.div`
  display: block;
  margin: 16px;
`

export const ProductSelector = styled.div`
  display: block;
  margin: 16px;
`

export const Img = styled.img`
  padding: 0;
  max-width: 350px;
  max-height: 350px;
`

export const PricingSection = styled.div`
  display: block;
  margin: 16px;
`

export const PriceTag = styled.span`
  font-size: 28px;
  line-height: 27px;
  color: #2E384D;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: normal;
`

export const DiscountPrice = styled.span`
  font-size: 18px;
  line-height: 27px;
  color: #2E384D;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: normal;
`

export const YouSave = styled.span`
  margin-left: 10px;
  font-size: 14px;
  line-height: 27px;
  color: red;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: normal;
`

export const Button = styled.button`
  width: 250px;
  height: 115px;
  text-decoration: none;
  background-color: #F0F5F5;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
  color: #213f4e;
  padding: 6px 0 3px;
  transition: all 0.3s ease 0s;
`

export const FlexDiv = styled.div`
  display: flex;
  width: 500px;
  margin: 16px;
`

export const QuantitySelector = styled.select`
  display: flex;
  width: 500px;
  margin: 16px;
`
export const ShopButton = styled.a`
  width: 100%;
  text-decoration: none;
  background-color: #C95F3D;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  color: #FFFDF1;
  transition: all 0.3s ease 0s;
  display: block;
  width: 100%;
  padding: 15px 0;
  border: none;
  letter-spacing: normal;
  font-family: "P22-Demi";
  text-transform: capitalize;
  line-height: 1.5;
  cursor:pointer;
`

export const ProductSelect = styled(Select)`
  width: 100%;
`

export const LinethroughSpan = styled.span`
  text-decoration: line-through;
`