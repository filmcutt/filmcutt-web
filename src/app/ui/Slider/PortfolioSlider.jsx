import Slider from 'react-slick';
import Div from '../Div';
import Portfolio from '../Portfolio';

export default function PortfolioSlider({ data }) {
	/** Slider Settings **/
	const settings = {
		infinite: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 500,
		dots: true,
		arrows: false,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Div className="slider-container">
			<Slider {...settings} className="cs-style3 cs-gap-24">
				{data.map((item, index) => (
					<Div key={index}>
						<Portfolio
							title={item.title}
							subtitle={item.subtitle}
							href={item.href}
							src={item.src}
						/>
					</Div>
				))}
			</Slider>
		</Div>
	);
}
