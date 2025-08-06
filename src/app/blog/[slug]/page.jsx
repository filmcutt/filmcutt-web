import { getBlogBySlug } from '../../../actions/actions';
import ClientPage from './client';

export const revalidate = 5;

export default async function BlogDetailsPage({ params }) {
	const slug = params.slug;
	const data = await getBlogBySlug(slug);
	return (
		<>
			<ClientPage data={data} />
		</>
	);
}
