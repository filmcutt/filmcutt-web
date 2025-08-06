'use client';
import { useParams } from 'next/navigation';
import Accordion from '../../../app/ui/Accordion';
import Cta from '../../../app/ui/Cta';
import Div from '../../../app/ui/Div';
import PageHeading from '../../../app/ui/PageHeading';
import PricingTableList from '../../../app/ui/PricingTable/PricingTableList';
import SectionHeading from '../../../app/ui/SectionHeading';
import Spacing from '../../../app/ui/Spacing';
import VideoModal from '../../../app/ui/VideoModal';
import services from '../../../data/services.json';
import servicesPricingData from '../../../data/servicesDetails.json';

const serviceNameToId = services.reduce((acc, service) => {
	const formattedName = service.name.toLowerCase().replace(/\s+/g, '-');
	acc[formattedName] = service.id;
	return acc;
}, {});

export default function ServiceDetailsPage() {
	const params = useParams();

	const serviceId = serviceNameToId[params.serviceDetailsId];
	const serviceDetails = servicesPricingData?.filter(
		service => service.serviceId === serviceId
	);

	const serviceDetailsWithCategory = serviceDetails?.map(item => {
		return {
			...item,
			category: services.find(service => service.id === item.serviceId)?.name,
		};
	});

	// Error handling if serviceId is not found
	if (!serviceId) {
		return <p>Service not found. Please check the URL and try again.</p>;
	}

	return (
		<>
			<PageHeading
				title={params.serviceDetailsId.split('-').join(' ')}
				bgSrc="/images/service_hero_bg.jpeg"
				pageLinkText="SERVICE-DETAILS"
			/>
			<Spacing lg="80" md="20" />
			<Div className="container">
				{/* Uncomment and use the dynamic service image if available */}
				{/* <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                        <Div className="cs-radius_15 cs-shine_hover_1">
                            <Image
                                src={serviceImage}
                                alt="Service"
                                className="cs-radius_15 w-100"
                                placeholder="blur"
                            />
                        </Div>
                        <Spacing lg="0" md="40" />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h2 className="cs-font_50 cs-m0">
                            Below our most design related services
                        </h2>
                        <Spacing lg="50" md="30" />
                        <Div className="row">
                            <Div className="col-lg-6">
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Web page design"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="eCommerce design"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Landing page"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Email template"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Application design"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Illustration"
                                    variant="cs-type2"
                                />
                                <Spacing lg="0" md="10" />
                            </Div>
                            <Div className="col-lg-6">
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Infographic design"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Mobile apps design"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Banner, brochure, card"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink="/service/service-details"
                                    btnText="Other design"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                            </Div>
                        </Div>
                    </Div>
                </Div> */}
			</Div>

			{/* <TestimonialSlider /> */}
			<Div className="container">
				<SectionHeading
					title="Providing best <br/>pricing for client"
					subtitle="Pricing & Packaging"
				/>
				<Spacing lg="85" md="40" />
				<PricingTableList serviceDetails={serviceDetailsWithCategory} />
			</Div>
			<Spacing lg="145" md="80" />
			<Div className="container">
				<VideoModal
					videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
					bgUrl="/images/video_bg.jpeg"
				/>
			</Div>
			<Spacing lg="150" md="80" />
			<Div className="container cs-shape_wrap_4">
				<Div className="cs-shape_4"></Div>
				<Div className="cs-shape_4"></Div>
				<Div className="container">
					<Div className="row">
						<Div className="col-xl-5 col-lg-6">
							<SectionHeading
								title="Some pre questions and answers"
								subtitle="FAQ’s"
							/>
							<Spacing lg="90" md="45" />
						</Div>
						<Div className="col-lg-6 offset-xl-1">
							<Accordion />
						</Div>
					</Div>
				</Div>
			</Div>
			<Spacing lg="150" md="80" />
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
