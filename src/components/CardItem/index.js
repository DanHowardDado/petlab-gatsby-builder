import React from 'react'
import {
  Card,
  Product,
  Title,
  Subtitle,
  PriceTag,
  Img,
  StyledLink,
  ShopButton
} from './styles'

export const CardItem = props => {

  const {
    id,
    linkTo,
    image,
    title,
    subtitle,
    price,
    buttonText
  } = props;

  return (
    <Card>
      <StyledLink to={linkTo}>
        <Product key={id ? id : ""}>
              <Img
                src={image}
                alt=""
              />
          <Title>{title ? title : ""}</Title>
          <Subtitle>{subtitle ? subtitle : ""}</Subtitle>
          <PriceTag>From {price ? price: ''}</PriceTag>
          <ShopButton>
            {buttonText ? buttonText: "SHOP NOW"}
          </ShopButton>
        </Product>
      </StyledLink>
    </Card >
  )
}

export default CardItem
