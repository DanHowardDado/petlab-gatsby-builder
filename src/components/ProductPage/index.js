import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Container, TwoColumnGrid } from '../../utils/styles'
import * as S from './styles'
import Navigation from '../../components/Navigation'

export const ProductPage = props => {

  const {
    title,
    image,
    otpProducts,
    subscribeProducts
  } = props;

  const subscriptionDiscount = 25;
  // pageContext.product.productSelector.newDiscount > 0 ? 1 - (pageContext.product.productSelector.newDiscount / 100) : 1 - (pageContext.Discount / 100)

  //create list of product objects for product selector
  const otpQuantityOptions = otpProducts[0].variants.map(product => ({
      variantId: '',
      value: product.value,
      label: product.label,
    })
  );
  const subscribeQuantityOptions = subscribeProducts[0].variants.map(product => ({
      variantId: '',
      value: product.value,
      label: product.label,
    })
  );

  //states to manage price, discount price and product selectors
  const [price, setPrice] = useState(subscribeQuantityOptions[0].value)
  const [discountedPrice, setDiscountedPrice] = useState(subscriptionDiscount * price)

  const [otpBtnClicked, setOtpBtnClicked] = useState(false);

  const [otpSelectedOption, setOTPSelectedOption] = useState(otpQuantityOptions[0]);
  const [subscribeSelectedOption, setSubscribeSelectedOption] = useState(subscribeQuantityOptions[0]);

  // update the price of OTP selector
  function OTPPriceUpdate(value) {
    setOTPSelectedOption(value)
    setPrice(value.price)
  }

  //update the price of Subscription selector and discounted price
  function SubscribePriceUpdate(value) {
    setSubscribeSelectedOption(value)
    setPrice(value.price)
    setDiscountedPrice((subscriptionDiscount / 100) * value.price)
  }

  // update the price of OTP product
  const handleOTPBtnClick = () => {
    setOtpBtnClicked(true);
    setOTPSelectedOption(otpQuantityOptions[0])
    setPrice(otpQuantityOptions[0].price)
  };

  //update the price of subscription product as well as discounted price
  const handleSubscriptionBtnClick = () => {
    setOtpBtnClicked(false);
    setSubscribeSelectedOption(subscribeQuantityOptions[0])
    setPrice(subscribeQuantityOptions[0].price)
    setDiscountedPrice((subscriptionDiscount / 100) * subscribeQuantityOptions[0].price)
  };

  // const AddToCart = async () => {

  //   const storefrontId = otpBtnClicked ? otpSelectedOption.variantId : subscribeSelectedOption.variantId
  //   const convertedId = atob(storefrontId)
  //   const extractedNumericId = convertedId.replace(/^\D+/g, '');
  //   let formData = {
  //     'items': [{
  //       'id': extractedNumericId,
  //       'quantity': 1
  //     }]
  //   };

  //   fetch('/shopify/cart/add.js', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Container>
      <S.Title>
        {title}
      </S.Title>
      <TwoColumnGrid>
        <S.ProductImg>
          {image && (
            <S.Img
              src={image}
              alt={title}
            />
          )}
        </S.ProductImg>
        <S.ProductSelector>
          <S.PricingSection>
            {otpBtnClicked ? (
              <S.PriceTag>
                {getPrice(price)}
              </S.PriceTag>
            ) : (
                <div>
                  <S.FlexDiv>
                    <S.DiscountPrice>
                      List Price: <S.LinethroughSpan>{getPrice(price)}</S.LinethroughSpan>
                    </S.DiscountPrice>
                  </S.FlexDiv>
                  <S.FlexDiv>
                    <S.PriceTag>
                      {getPrice(discountedPrice)}
                      <S.YouSave>
                        You Save: {getPrice(price - discountedPrice)} ({(1 - subscriptionDiscount) * 100}%)
                    </S.YouSave>
                    </S.PriceTag>
                  </S.FlexDiv>
                </div>
              )}
          </S.PricingSection>
          <S.FlexDiv>
            <S.Button onClick={handleOTPBtnClick}>
              One-time purchase
            </S.Button>
            <S.Button onClick={handleSubscriptionBtnClick}>
              Subscribe & Save
            </S.Button>
          </S.FlexDiv>
          <S.FlexDiv>
            {otpBtnClicked && (
              <S.ProductSelect
                options={otpQuantityOptions}
                value={otpSelectedOption}
                onChange={e => { OTPPriceUpdate(e) }}
              />
            )}

            {!otpBtnClicked && (
              <S.ProductSelect
                options={subscribeQuantityOptions}
                value={subscribeSelectedOption}
                onChange={e => { SubscribePriceUpdate(e) }}
              />
            )}
          </S.FlexDiv>
          <S.FlexDiv>
            <S.ShopButton >
              {otpBtnClicked ? (
                'Add To Cart'
              ) : (
                  'Subscribe'
                )}
            </S.ShopButton>
            {/* <S.ShopButton onClick={AddToCart}>
              {otpBtnClicked ? (
                'Add To Cart'
              ) : (
                  'Subscribe'
                )}
            </S.ShopButton> */}
          </S.FlexDiv>
        </S.ProductSelector>
      </TwoColumnGrid>
    </Container>
  )
}

export default ProductPage

// export const query =
//   graphql`
//   query ShopifyProducts($OTPProducts: [String], $SubscriptionProducts: [String]) {
//      otpProducts: allShopifyProduct(filter: {variants: {elemMatch: {shopifyId: {in: $OTPProducts}}}}) {
//         edges {
//           node {
//             id
//             images {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 350, maxHeight: 350) {
//                     ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                   }
//                 }
//               }
//             }
//             title
//             variants {
//               price
//               shopifyId
//             }
//           }
//         }
//       }
//        subscriptionProducts: allShopifyProduct(filter: {variants: {elemMatch: {shopifyId: {in: $SubscriptionProducts}}}}) {
//           edges {
//             node {
//               id
//               images {
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 350, maxHeight: 350) {
//                       ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                     }
//                   }
//                 }
//               }
//               title
//               variants {
//                 price
//                 shopifyId
//               }
//             }
//           }
//         }
//     }
//   `


