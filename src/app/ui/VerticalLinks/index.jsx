import { Icon } from '@iconify/react';
import Div from '../Div';

export default function VerticalLinks({ title, data, variant }) {
	return (
		<Div
			className={`cs-hero_social_wrap cs-primary_font cs-primary_color ${
				variant ? variant : ''
			}`}
		>
			{title && <Div className="cs-hero_social_title">{title}</Div>}
			{/* {data && (
        <ul className="cs-hero_social_links">
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.links}>{item.name}</a>
            </li>
          ))}
        </ul>
      )} */}
			<Div className="cs-social_btns flex gap-4">
				{data?.map(item => (
					<a
						href={item.link}
						key={item.name}
						className="cs-center rotate-180"
						target="_blank"
					>
						<Icon icon={item?.icon} />
					</a>
				))}
			</Div>
		</Div>
	);
}
