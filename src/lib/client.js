import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: "o30gdx3u",
    dataset: "production",
    apiVersion: "2023-04-25",
    useCdn: true,
    token: process.env.SANITY_TOKEN, 
});

const builder = imageUrlBuilder(client);

// sanity gives us access to url to where images are stored
export const urlFor = (source) => builder.image(source);