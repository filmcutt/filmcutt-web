'use client';
import { Fragment } from 'react';
import portfolioData from '../data/portfolioData.json';
import services from '../data/services.json';
import socialLinks from '../data/socialLinks.json';
import Card from './ui/Card';
import Cta from './ui/Cta';
import Div from './ui/Div';
import FunFact from './ui/FunFact';
import Hero from './ui/Hero';
import Portfolio from './ui/Portfolio';
import SectionHeading from './ui/SectionHeading';
import PortfolioSlider from './ui/Slider/PortfolioSlider';
import PostSlider from './ui/Slider/PostSlider';
import TeamSlider from './ui/Slider/TeamSlider';
import Spacing from './ui/Spacing';

// Hero Social Links
const heroSocialLinks = socialLinks?.map(link => ({
	link: link.url,
	name: link.platform,
	icon: link.icon,
}));
// FunFact Data
const funfaceData = [
	{
		title: 'Global Happy Clients',
		factNumber: '50',
	},
	{
		title: 'Project Completed',
		factNumber: '500',
	},
	{
		title: 'Team Members',
		factNumber: '10',
	},
];

export default function Home() {
	return (
		<>
			{/* Start Hero Section */}
			<Hero
				title="We Make <br/>Things Look Good."
				subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
				btnText="Visit Portfolio"
				btnLink="/portfolio"
				scrollDownId="#service"
				socialLinksHeading="Follow Us"
				heroSocialLinks={heroSocialLinks}
				bgImageUrl="/images/hero_bg.jpeg"
			/>
			{/* End Hero Section */}

			{/* Start FunFact Section */}
			<div className="container">
				<FunFact
					variant="cs-type1"
					title="Our fun fact"
					subtitle="We Completed 100+ Project Yearly Successfully & Still Counting"
					data={funfaceData}
				/>
			</div>
			{/* End FunFact Section */}

			{/* Start Service Section */}
			<Spacing lg="150" md="80" />
			<Div id="service">
				<Div className="container">
					<Div className="row">
						<Div className="col-xl-4">
							<SectionHeading
								title="Services we can help you with"
								subtitle="What Can We Do"
								btnText="See All Services"
								btnLink="/service"
							/>
							<Spacing lg="90" md="45" />
						</Div>
						<Div className="col-xl-8">
							<Div className="row">
								{services?.map(service => (
									<Fragment key={service.id}>
										<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
										<Div className="col-lg-3 col-sm-6">
											<Card
												title={service.name}
												link={`/service/${service.name
													.split(' ')
													.join('-')
													.toLowerCase()}`}
												src="/images/service_1.jpeg"
												alt="Service"
											/>
											<Spacing lg="0" md="30" />
										</Div>
										<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
									</Fragment>
								))}
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			{/* End Service Section */}

			{/* Start Portfolio Section */}
			<Spacing lg="150" md="50" />
			<Div>
				<Div className="container">
					<SectionHeading
						title="Portfolio to explore"
						subtitle="Latest Projects"
						variant="cs-style1 text-center"
					/>
					<Spacing lg="90" md="45" />
				</Div>
				<PortfolioSlider data={portfolioData} />
			</Div>
			{/* End Portfolio Section */}

			{/* Start Awards Section */}
			{/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
			{/* End Awards Section */}

			{/* Start Video Block Section */}
			<Spacing lg="130" md="70" />
			<Div className="container">
				<h2 className="cs-font_30 cs-m0 text-center cs-line_height_4">
					We craft viral content that captivates audiences. Our process includes
					deep brand understanding, compelling storytelling, strategic platform
					selection, and expert video production. We optimize for shares,
					engagement, and growth. Let's create something extraordinary together
				</h2>
				<Spacing lg="70" md="70" />
				{/* <VideoModal
					videoSrc="https://www.youtube.com/watch?v=qeonaGA817g"
					bgUrl="/images/video_bg.jpeg"
				/> */}

				<Portfolio
					title={'3D Animation'}
					src={'https://www.youtube.com/embed/qeonaGA817g'}
				/>
			</Div>
			{/* End Video Block Section */}

			{/* Start Team Section */}
			<Spacing lg="145" md="80" />
			<Div className="container">
				<SectionHeading
					title="Awesome team <br/>members"
					subtitle="Our Team"
					variant="cs-style1"
				/>
				<Spacing lg="85" md="45" />
				<TeamSlider />
			</Div>
			<Spacing lg="150" md="80" />
			{/* End Team Section */}

			{/* Start Testimonial Section */}
			{/* <TestimonialSlider /> */}
			{/* End Testimonial Section */}

			{/* Start Blog Section */}
			<Spacing lg="150" md="80" />
			<Div className="cs-shape_wrap_4">
				<Div className="cs-shape_4"></Div>
				<Div className="cs-shape_4"></Div>
				<Div className="container">
					<Div className="row">
						<Div className="col-xl-4">
							<SectionHeading
								title="Explore recent publication"
								subtitle="Our Blog"
								btnText="View More Blog"
								btnLink="/blog"
							/>
							<Spacing lg="90" md="45" />
						</Div>
						<Div className="col-xl-7 offset-xl-1">
							<Div className="cs-half_of_full_width">
								<PostSlider />
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			{/* End Blog Section */}

			{/* Start MovingText Section */}
			{/* <Spacing lg="125" md="70" />
			<MovingText text="Our reputed world wide partners" />
			<Spacing lg="105" md="70" /> */}
			{/* End MovingText Section */}

			{/* Start LogoList Section */}
			{/* <Div className="container">
				<LogoList />
			</Div> */}
			<Spacing lg="150" md="80" />
			{/* End LogoList Section */}

			{/* Start CTA Section */}
			<Div className="container">
				<Cta
					title="Let’s disscuse make <br />something <i>cool</i> together"
					btnText="Apply For Meeting"
					btnLink="/contact"
					bgSrc="/images/cta_bg.jpeg"
				/>
			</Div>
			{/* End CTA Section */}
		</>
	);
}
