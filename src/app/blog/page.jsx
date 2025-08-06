import { getBlogData } from '../../actions/actions';
import BlogClientPage from './page.client';

export const revalidate = 5;

export default async function BlogPage() {
	const data = await getBlogData();

	return (
		<>
			<BlogClientPage data={data} />
		</>
	);
}
