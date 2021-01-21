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

  console.log(props);

  //Get list of contentful products 
 // const contentfulSubscriptionProducts = pageContext.product.productSelector.subscriptionProducts
 //const contentfulOTPProducts = pageContext.product.productSelector.otpProducts
  //Get packaging type for dropdown 
  //const packaging = pageContext.product.productSelector.packaging
  //get subscription discount from either override field in contentful or constant from node file
  // const subscriptionDiscount = pageContext.product.productSelector.newDiscount > 0 ? 1 - (pageContext.product.productSelector.newDiscount / 100) : 1 - (pageContext.Discount / 100)
  // get relative shopify products from below query
 // const shopifySubscriptionProducts = data.subscriptionProducts.edges;
  // shopifyOTPProducts = data.otpProducts.edges;

  //Update shopify products with contentful variant identifier 
  //This allows products in contentful to be used as variants and be identifiable in the dropdown
  // const updateShopifyProducts = () => {
  //   shopifySubscriptionProducts.map(function ({ node }) {
  //     var result = contentfulSubscriptionProducts.filter(contentful => contentful.variantId === node.variants[0].shopifyId);
  //     if (result.length > 0) {
  //       node.variant = result[0].variant;
  //     }
  //     return node
  //   })

  //   shopifyOTPProducts.map(function ({ node }) {
  //     var result = contentfulOTPProducts.filter(contentful => contentful.variantId === node.variants[0].shopifyId);
  //     if (result.length > 0) {
  //       node.variant = result[0].variant;
  //     }
  //     return node
  //   })

  // };
  // updateShopifyProducts();

  const subscriptionDiscount = 25;
  // pageContext.product.productSelector.newDiscount > 0 ? 1 - (pageContext.product.productSelector.newDiscount / 100) : 1 - (pageContext.Discount / 100)

  //create list of product objects for product selector
  const otpQuantityOptions = otpProducts.map(product => ({
      variantId: '',
      value: product.value,
      label: product.label,
    })
  );
  const subscribeQuantityOptions = subscribeProducts.map(product => ({
      variantId: '',
      value: product.value,
      label: product.label,
    })
  );

  //sort product variants to display in increasing order in dropdown
  // otpQuantityOptions.sort((a, b) => (a.value > b.value) ? 1 : -1)
  // subscribeQuantityOptions.sort((a, b) => (a.value > b.value) ? 1 : -1)

  //states to manage price, discount price and product selectors
  const [price, setPrice] = useState(subscribeQuantityOptions[0].price)
  const [discountedPrice, setDiscountedPrice] = useState(subscriptionDiscount * price)

  const [otpBtnClicked, setOtpBtnClicked] = useState(false);

  const [otpSelectedOption, setOTPSelectedOption] = useState(otpQuantityOptions[0]);
  const [subscribeSelectedOption, setSubscribeSelectedOption] = useState(subscribeQuantityOptions[0]);

  // update the price of OTP selector
  function OTPPriceUpdate(value) {
    setOTPSelectedOption(value)
    setPrice(otpQuantityOptions[value.value - 1].price)
  }

  //update the price of Subscription selector and discounted price
  function SubscribePriceUpdate(value) {
    setSubscribeSelectedOption(value)
    setPrice(subscribeQuantityOptions[value.value - 1].price)
    setDiscountedPrice(subscriptionDiscount * subscribeQuantityOptions[value.value - 1].price)
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
    setDiscountedPrice(subscriptionDiscount * subscribeQuantityOptions[0].price)
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


