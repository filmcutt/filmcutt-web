'use client';
import { urlFor } from '../../lib/sanity';
import Cta from '../ui/Cta';
import Div from '../ui/Div';
import PageHeading from '../ui/PageHeading';
import PostStyle2 from '../ui/Post/PostStyle2';
import Spacing from '../ui/Spacing';

const BlogClientPage = ({ data }) => {
	return (
		<>
			<PageHeading
				title="Our Blog"
				bgSrc="/images/blog_hero_bg.jpeg"
				pageLinkText="Blog"
			/>
			<Spacing lg="150" md="80" />
			<Div className="container">
				{/* <Div className="row"> */}
				<Div className="grid md:grid-cols-2 gap-8">
					{data?.map((item, index) => (
						<Div key={index}>
							<PostStyle2
								thumb={urlFor(item.titleImage).url()}
								title={item.title}
								subtitle={item.smallDescription}
								category={item.tags.reduce((acc, curr) => acc + ', ' + curr)}
								date={item.createdAt}
								href={`/blog/${item.currentSlug}`}
							/>
							{data?.length > index + 1 && <Spacing lg="95" md="60" />}
						</Div>
					))}
					<Spacing lg="60" md="40" />
					{/* <Pagination /> */}
				</Div>
				{/* <Div className="col-xl-3 col-lg-4 offset-xl-1">
			<Spacing lg="0" md="80" />
			<Sidebar />
		</Div> */}
				{/* </Div> */}
			</Div>
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Cta
					title="Let’s discuss make <br />something <i>cool</i> together"
					btnText="Apply For Meeting"
					btnLink="/contact"
					bgSrc="/images/cta_bg.jpeg"
				/>
			</Div>
		</>
	);
};

export default BlogClientPage;
