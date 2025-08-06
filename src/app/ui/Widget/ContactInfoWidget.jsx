import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
	return (
		<>
			{title && <h2 className="cs-widget_title">{title}</h2>}
			<ul className="cs-menu_widget cs-style1 cs-mp0">
				<li>
					{withIcon ? (
						<span className="cs-accent_color">
							<Icon icon="ic:baseline-whatsapp" />
						</span>
					) : (
						''
					)}
					+88 018 7050 6803
				</li>
				<li>
					{withIcon ? (
						<span className="cs-accent_color">
							<Icon icon="mdi:envelope" />
						</span>
					) : (
						''
					)}
					filmcutt4@gmail.com
				</li>
				<li>
					{withIcon ? (
						<span className="cs-accent_color">
							<Icon icon="mdi:map-marker" />
						</span>
					) : (
						''
					)}
					New York City , United States
				</li>
			</ul>
		</>
	);
}
