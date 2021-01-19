import { Builder } from '@builder.io/react';
import { CardItem } from '../CardItem';

Builder.registerComponent(CardItem, {
  name: 'CardItem',
  inputs: [
    {
      name: 'id',
      type: 'string',
      defaultValue: 'Enter ID (maybe variant?)'
    },
    {
      name: 'title',
      type: 'string',
      required: true,
      defaultValue: ''
    },
    {
      name: 'subtitle',
      type: 'string',
      required: true,
      defaultValue: ''
    },
    {
      name: 'linkTo',
      type: 'string',
      required: true,
      defaultValue:
        '/'
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F52dcecf48f9c48cc8ddd8f81fec63236'
    },
    {
      name: 'price',
      type: 'string',
      required: true,
      defaultValue: '0'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Subscribe'
    },
  ]
});
