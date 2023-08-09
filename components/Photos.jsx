import React from 'react';

import { urlFor } from '../utils/client';

const Photos = ({ gallery: { title, image } }) => {
  return (
    <div className="grid gap-4">
        <div>
            <img 
            className="h-auto max-w-full rounded-lg" 
            src={urlFor(image)} 
            alt={title}
            />
        </div>
    </div>
  )
}

export default Photos