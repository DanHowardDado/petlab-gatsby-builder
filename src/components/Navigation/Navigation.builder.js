import { Builder } from '@builder.io/react';
import { Navigation } from '../Navigation';

Builder.registerComponent(Navigation, {
  name: 'Navigation',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Your Title Here'
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
      name: 'buttonLink',
      type: 'string',
      defaultValue: 'https://example.com'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Click'
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 400
    },
    {
      name: 'darkMode',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'parallaxStrength',
      type: 'number',
      advanced: true,
      defaultValue: 400
    }
  ]
});
