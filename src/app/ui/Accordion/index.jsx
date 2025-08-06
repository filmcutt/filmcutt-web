import { useState } from 'react';
import Div from '../Div';

const accordionData = [
	{
		question: 'What kind of videos do you specialize in?',
		answer:
			'Experts in visual storytelling, we craft compelling horizontal and vertical videos, dynamic business videos, persuasive product ads, and imaginative animations.',
	},
	{
		question: 'Do you offer video shooting services as well?',
		answer: 'No, we specialize in video editing and production services.',
	},
	{
		question: 'Do you offer unlimited revisions?',
		answer:
			'Your satisfaction is our top priority. Enjoy unlimited revisions until your vision comes to life.',
	},
	{
		question: 'What video formats do you work with?',
		answer:
			'We work with horizontal, vertical, and any other formats you need.',
	},
	{
		question: 'What is your typical turnaround time?',
		answer:
			'Our typical turnaround time is 2-3 business days. For projects like 2D animation or SaaS videos, it may take up to a week.',
	},
	{
		question:
			'Do you have experience with specific platforms (YouTube, Instagram, etc.)?',
		answer:
			"We're a full-service video marketing agency experienced in video editing and YouTube channel management.",
	},
	{
		question: 'What software do you use?',
		answer:
			'We use Premiere Pro and After Effects for video editing. Additionally, we have our Video Order Management Application built on Trello for efficient project management.',
	},
	{
		question: 'Will I have the same editor for every video?',
		answer:
			'Yes, your video project receives dedicated attention from the same video manager, editor, and thumbnail artist throughout the process.',
	},
];

export default function Accordion() {
	const [selected, setSelected] = useState(null);

	const handleToggle = index => {
		setSelected(selected === index ? null : index);
	};

	return (
		<Div className="cs-accordians cs-style1">
			{accordionData.map((item, index) => (
				<Div
					className={`cs-accordian ${selected === index ? 'active' : ''}`}
					key={index}
				>
					<Div
						className="cs-accordian_head"
						onClick={() => handleToggle(index)}
					>
						<h2 className="cs-accordian_title">{item.question}</h2>
						<span className="cs-accordian_toggle cs-accent_color">
							<svg
								width={15}
								height={8}
								viewBox="0 0 15 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
							</svg>
						</span>
					</Div>
					<Div className="cs-accordian_body">
						<Div className="cs-accordian_body_in">{item.answer}</Div>
					</Div>
				</Div>
			))}
		</Div>
	);
}
