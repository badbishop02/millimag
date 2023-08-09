import { createClient, groq } from "next-sanity";

export async function getMeals() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: 'production',
        apiVersion: '2022-03-10',
        useCdn: false,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    });


    return client.fetch(
      groq`*[_type == 'meals']{
        slug,
        title,
        price,
        glovo,
        boltfood,
        image,
        category,
        description,
     }`
    )
}