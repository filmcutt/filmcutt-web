import ImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
    apiVersion:"2025-02-18",
    dataset: "production",
    projectId:"1cnv361i",
    useCdn: false
})

const builder = ImageUrlBuilder(client);

export function urlFor(source){
    return builder.image(source)
}