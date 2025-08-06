'use client';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from '../../../lib/sanity';
import { formatDateMonthYear } from '../../../utils';
import Cta from '../../ui/Cta';
import Div from '../../ui/Div';
import PageHeading from '../../ui/PageHeading';
import Spacing from '../../ui/Spacing';

export default function ClientPage({ data }) {
	return (
		<>
			{/* Start Page Heading Section */}
			<PageHeading
				title="Blog Single"
				bgSrc="/images/blog_details_hero_bg.jpeg"
				pageLinkText="blog-details"
			/>
			{/* End Page Heading Section */}

			{/* Start Blog Details */}
			<Spacing lg="150" md="80" />
			<Div className="container">
				{/* <Div className="row"> */}
				<Div className="col-lg-12">
					{/* Start Details Post Content */}
					<Div className="cs-post cs-style2">
						<Div className="cs-post_thumb cs-radius_15 !max-h-[500px]">
							<Image
								src={urlFor(data.titleImage).url()}
								alt={data.title}
								priority
								className="w-100 cs-radius_15"
								width={1200}
								height={600}
							/>
						</Div>
						<Div className="cs-post_info">
							<Div className="pb-4 flex flex-col gap-4">
								<span className="text-sm font-thin">
									{formatDateMonthYear(data?.createdAt)}
								</span>
								<Div className="flex flex-wrap gap-2.5">
									{data?.tags?.map((tag, index) => (
										<span
											key={index}
											className="bg-gray-200 dark:bg-gray-600/30 text-sm md:text-base px-3 py-1 rounded-full"
										>
											#{tag}
										</span>
									))}
								</Div>
							</Div>
							<h2 className="cs-post_title">{data?.title}</h2>
							{/* <p>{data?.content}</p> */}
							<div className="prose dark:prose-invert">
								<PortableText value={data.content} />
							</div>
						</Div>
					</Div>
				</Div>
				{/* </Div> */}
			</Div>
			<Spacing lg="150" md="80" />
			{/* Start Blog Details */}

			{/* Start CTA Section */}
			<Div className="container">
				<Cta
					title="Let’s discuss make <br />something <i>cool</i> together"
					btnText="Apply For Meeting"
					btnLink="/contact"
					bgSrc="/images/cta_bg.jpeg"
				/>
			</Div>
			{/* End CTA Section */}
		</>
	);
}
