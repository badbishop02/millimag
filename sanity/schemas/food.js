export default {
    name: 'food',
    title: 'Food',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'glovo',
        title: 'Glovo',
        type: 'string',
      },
      {
        name: 'boltFood',
        title: 'BoltFood',
        type: 'string',
      },
      {
        name: 'detail',
        title: 'Detail',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
    ],
  }
  