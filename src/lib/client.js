import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-04-26",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, 
});

const builder = imageUrlBuilder(client);

// sanity gives us access to url to where images are stored
export const urlFor = (source) => builder.image(source);