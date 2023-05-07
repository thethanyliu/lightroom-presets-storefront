export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'DNG_zip',
      title: 'DNG Zip',
      type: 'file',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'feature',
      title: 'feature',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'presetNumber',
      title: 'Preset Number',
      type: 'number',
    },
    {
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
    },
  ],
}
