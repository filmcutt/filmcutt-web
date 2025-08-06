import Div from '../Div';

export default function Portfolio({ href, src, title, subtitle, variant }) {
	return (
		<>
			{/* <Div className="cs-portfolio_hover" /> */}
			<Div className="cs-portfolio_bg cs-bg" />
			<iframe
				src={src}
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				className="w-full !aspect-video h-full rounded-xl"
			>
				{' '}
			</iframe>
			{/* <Div className="cs-portfolio_info">
					<Div className="cs-portfolio_info_bg cs-accent_bg" />
					<h2 className="cs-portfolio_title">{title}</h2>
					<Div className="cs-portfolio_subtitle">{subtitle}</Div>
				</Div> */}
		</>
	);
}
