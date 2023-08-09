export default {
    name: 'discounts',
    title: 'Discounts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'percentage',
            title: 'Percentage',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },        
    ],
}