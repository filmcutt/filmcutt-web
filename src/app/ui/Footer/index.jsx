import services from '../../../data/services.json';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

const copyrightLinks = [
	{
		title: 'Terms of Use',
		href: '/',
	},
	{
		title: 'Privacy Policy',
		href: '/',
	},
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
	const servicesWithHref = services.map(service => ({
		title: service.name,
		href: `/service/${service.name.split(' ').join('-').toLowerCase()}`,
	}));
	return (
		<footer className="cs-fooer">
			<Div className="cs-fooer_main">
				<Div className="container">
					<Div className="row">
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<TextWidget
									logoSrc="/logo.svg"
									logoAlt="Logo"
									text="Welcome to our content making world."
								/>
								<SocialWidget />
							</Div>
						</Div>
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<MenuWidget
									menuItems={servicesWithHref}
									menuHeading="Services"
								/>
							</Div>
						</Div>
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<ContactInfoWidget title="Contact Us" />
							</Div>
						</Div>
						<Div className="col-lg-3 col-sm-6">
							<Div className="cs-footer_item">
								<Newsletter
									title="Subscribe"
									subtitle="Send you email. We will deliver your updates and tips!"
									placeholder="example@gmail.com"
								/>
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			<Div className="container">
				<Div className="cs-bottom_footer">
					<Div className="cs-bottom_footer_left">
						<Div className="cs-copyright">
							Copyright © {`${date}`} Filmcutt.
						</Div>
					</Div>
					<Div className="cs-bottom_footer_right">
						<MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
					</Div>
				</Div>
			</Div>
		</footer>
	);
}
