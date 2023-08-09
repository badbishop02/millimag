export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'timespan',
            title: 'Timespan',
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