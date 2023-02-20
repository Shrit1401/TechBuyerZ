import {phoneCompany} from '../../components/data'

export default {
  name: 'phones',
  title: 'Phones',
  type: 'document',
  fields: [
    {
      // image
      name: 'phoneImage',
      title: 'PhoneImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      // name
      name: 'phoneName',
      title: 'PhoneName',
      type: 'string',
    },
    {
      // /slug
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'phoneName',
        maxLength: 100,
      },
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
      options: {
        list: phoneCompany.map((item) => {
          return {
            title: item.title,
            value: item.name,
          }
        }),
      },
    },

    {
      // max price
      name: 'newPrice',
      title: 'New Phone Price',
      type: 'number',
    },
    {
      // max price
      name: 'mintPrice',
      title: 'Mint Phone Price',
      type: 'number',
    },
    {
      // max price
      name: 'usedPrice',
      title: 'Used Phone Price',
      type: 'number',
    },
    {
      // max price
      name: 'damagedPrice',
      title: 'Damaged Phone Price',
      type: 'number',
    },
    {
      // max price
      name: 'brokenPrice',
      title: 'Broken Phone Price',
      type: 'number',
    },
  ],
}
