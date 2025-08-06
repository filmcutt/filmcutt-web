'use client';
import { Fragment } from 'react';
import Cta from '../../app/ui/Cta';
import Div from '../../app/ui/Div';
import PageHeading from '../../app/ui/PageHeading';
import SectionHeading from '../../app/ui/SectionHeading';
import Spacing from '../../app/ui/Spacing';
import services from '../../data/services.json';
import Card from '../ui/Card';

export default function ServicesPage() {
	return (
		<>
			<PageHeading
				title="Services"
				bgSrc="/images/service_hero_bg.jpeg"
				pageLinkText="Services"
			/>
			<Spacing lg="150" md="80" />
			<Div className="cs-shape_wrap_4">
				<Div className="cs-shape_4"></Div>
				<Div className="cs-shape_4"></Div>
				<Div className="container">
					<Div className="row">
						<Div className="col-xl-4">
							<SectionHeading
								title="Services we can help you with"
								subtitle="What Can We Do"
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

			<Spacing lg="125" md="55" />
			{/* <TestimonialSlider/>
      <Spacing lg='150' md='80'/> */}
			<Div className="container">
				<Cta
					title="Let’s disscuse make <br />something <i>cool</i> together"
					btnText="Apply For Meeting"
					btnLink="/contact"
					bgSrc="/images/cta_bg.jpeg"
				/>
			</Div>
		</>
	);
}
