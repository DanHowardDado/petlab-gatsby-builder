import { Builder } from '@builder.io/react';
import { ProductPage } from '../ProductPage';

Builder.registerComponent(ProductPage, {
  name: 'ProductPage',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'JOINT CARE CHEWS'
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F52dcecf48f9c48cc8ddd8f81fec63236'
    },
    { name: 'otpProducts',  type: 'list', subFields: [
      { name: 'variants',  type: 'list', subFields: [
          { name: 'label', type: 'string', defaultValue: '1 x Tub' },
          { name: 'value', type: 'string' },
          { name: 'discount_price', type: 'string' },
        ]
      },
    ]},
    { name: 'subscribeProducts',  type: 'list', subFields: [
      { name: 'variants',  type: 'list', subFields: [
          { name: 'label', type: 'string', defaultValue: '1' },
          { name: 'value', type: 'string' },
          { name: 'discount_price', type: 'string' },
        ]
      },
    ]},
  ]
});
