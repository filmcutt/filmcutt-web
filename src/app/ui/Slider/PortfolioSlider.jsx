import Slider from 'react-slick';
import Div from '../Div';
import Portfolio from '../Portfolio';

export default function PortfolioSlider({ data }) {
	const settings = {
		infinite: true,
		slidesToShow: 1,          // ✅ ONLY ONE CARD
		slidesToScroll: 1,
		autoplay: false,          // ❌ autoplay off (video friendly)
		speed: 500,
		dots: true,
		arrows: false,
		swipe: true,
		swipeToSlide: true,
		adaptiveHeight: true,     // ✅ content height follow করবে
	};

	return (
		<Div className="w-full overflow-hidden">
			<Slider {...settings}>
				{data.map((item, index) => (
					<Div key={index} className="w-full">
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
