'use client';
import Image from 'next/image';
import imgUrl from '../../../../public/images/teams/siam.jpg';
import Cta from '../../../app/ui/Cta';
import Div from '../../../app/ui/Div';
import PageHeading from '../../../app/ui/PageHeading';
import Spacing from '../../../app/ui/Spacing';
import SocialWidget from '../../../app/ui/Widget/SocialWidget';

export default function TeamDetails() {
	return (
		<>
			<PageHeading
				title="Team Details"
				bgSrc="/images/team_hero_bg.jpeg"
				pageLinkText="Team Details"
			/>
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div className="row align-items-center">
					<Div className="col-xl-5 col-lg-6">
						<Div className="cs-radius_15 cs-shine_hover_1">
							<Image
								src={imgUrl}
								alt="Member"
								className="w-100"
								placeholder="blur"
							/>
						</Div>
					</Div>
					<Div className="col-lg-6 offset-xl-1">
						<Spacing lg="0" md="45" />
						<Div className="cs-section_heading cs-style1">
							<h2 className="cs-section_title">Shadman Khan Siam</h2>
							<Div className="cs-height_10 cs-height_lg_10" />
							<h3 className="cs-section_subtitle">Founder & CEO</h3>
							<Div className="cs-height_5 cs-height_lg_5" />
							<Div className="cs-separator cs-accent_bg" />
							<Div className="cs-height_45 cs-height_lg_25" />
							<p className="cs-m0">
								With a proven track record of crafting over 400+ videos in five
								years, FILMCUTT has honed its expertise in content creation and
								editing. Our portfolio spans a diverse range of projects,
								including feature films and documentaries. We are confident in
								our ability to deliver exceptional video solutions that meet
								your highest standards.
							</p>
							<Div className="cs-height_45 cs-height_lg_30" />
							<SocialWidget />
						</Div>
					</Div>
				</Div>
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
}
