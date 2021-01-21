import { Builder } from '@builder.io/react';
import { Navigation } from '../Navigation';

Builder.registerComponent(Navigation, {
  name: 'Navigation',
  inputs: [
    { name: 'Navlinks',  type: 'list', subFields: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'PRODUCTS'
      },
      { name: 'sublinks',  type: 'list', subFields: [
          { name: 'text', type: 'string' },
          { name: 'link', type: 'string' },
        ]
      },
    ]
  },
  ]
});
