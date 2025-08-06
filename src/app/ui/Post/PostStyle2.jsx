import Link from 'next/link';
import Button from '../Button';
import Div from '../Div';

export default function PostStyle2({
	thumb,
	title,
	subtitle,
	date,
	category,
	href,
}) {
	return (
		<Div className="cs-post cs-style2">
			<Link href={href} className="cs-post_thumb cs-radius_15">
				<img src={thumb} alt="Post" className="h-72 !w-full cs-radius_15" />
			</Link>
			<Div className="cs-post_info">
				<Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font flex items-center">
					<span className="cs-posted_by">{date}</span>
					<h1 className="cs-post_avatar !font-normal !text-gray-400 !text-sm">
						{category}
					</h1>
				</Div>
				<h2 className="cs-post_title">
					<Link href={href} className="line-clamp-2">
						{title}
					</Link>
				</h2>
				<Div className="cs-post_sub_title line-clamp-4">{subtitle}</Div>
				<Button btnLink={href} btnText="See More" />
			</Div>
		</Div>
	);
}
