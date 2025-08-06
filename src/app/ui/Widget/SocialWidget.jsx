import { Icon } from '@iconify/react';
import Link from 'next/link';
import socialLinks from '../../../data/socialLinks.json';
import Div from '../Div';

export default function SocialWidget() {
	return (
		<Div className="cs-social_btns cs-style1">
			{socialLinks.map((link, index) => (
				<Link
					key={index}
					href={link.url}
					className="cs-center"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon icon={link.icon} aria-label={link.platform} />
				</Link>
			))}
		</Div>
	);
}
