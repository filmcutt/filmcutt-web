import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getBlogData } from '../../../actions/actions';
import { urlFor } from '../../../lib/sanity';
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
	const [blogs, setBlogs] = useState([]);

	const fetchBlogs = async () => {
		const data = await getBlogData();
		setBlogs(data.slice(0, 7));
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	// Check if blogs are available
	if (!blogs || blogs.length === 0) {
		return null; // or a loading spinner
	}

	/** Slider Settings **/
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<>
			{blogs.length < 3 ? (
				<Div className="flex flex-col md:flex-row gap-3">
					{blogs.map((item, index) => (
						<Div key={index}>
							<Post
								url={`/blog/${item.currentSlug}`}
								src={urlFor(item.titleImage).url()}
								alt={item.title}
								date={item.createdAt}
								title={item.title}
							/>
						</Div>
					))}
				</Div>
			) : (
				<Slider {...settings} className="cs-gap-24">
					{blogs.map((item, index) => (
						<Div key={index}>
							<Post
								url={`/blog/${item.currentSlug}`}
								src={urlFor(item.titleImage).url()}
								alt={item.title}
								date={item.createdAt}
								title={item.title}
							/>
						</Div>
					))}
				</Slider>
			)}
		</>
	);
}
