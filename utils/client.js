import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  });

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);