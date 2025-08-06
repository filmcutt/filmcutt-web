'use server';

import { client } from '../lib/sanity';
import { formatDateMonthYear } from '../utils';

export const getBlogData = async () => {
	const query = `*[_type == "blog"] | order(_createdAt desc) {
  title, 
    smallDescription,
    "currentSlug": slug.current,
    "createdAt": _createdAt,
    titleImage,
    tags
}`;

	const data = await client.fetch(query);

	return data.map(item => ({
    ...item,
    createdAt: formatDateMonthYear(item.createdAt)
  }))
};

export const getBlogBySlug = async slug => {
	const query = `*[_type == "blog" && slug.current == '${slug}'] {
  title, 
    "currentSlug": slug.current,
    "createdAt": _createdAt,
    content,
    titleImage,
    tags
}[0]`;

	const data = client.fetch(query);
	return data;
};
