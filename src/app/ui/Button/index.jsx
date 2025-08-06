import { Icon } from '@iconify/react';
import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Button({
	btnLink,
	btnText,
	variant = '',
	icon = null,
	className = '',
	iconVisibility = true,
	target = '_self',
}) {
	const buttonClass = variant
		? `cs-btn cs-style1 ${variant} flex gap-2`
		: 'cs-text_btn';
	const combinedClassName = clsx(buttonClass, className);

	return (
		<Link href={btnLink} className={combinedClassName} target={target}>
			<>
				<span>{btnText}</span>
				{iconVisibility &&
					(icon ? icon : <Icon icon="bi:arrow-right" className="md:ml-3.5" />)}
			</>
		</Link>
	);
}

Button.propTypes = {
	btnLink: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
	variant: PropTypes.string,
	icon: PropTypes.element,
	className: PropTypes.string,
	iconVisibility: PropTypes.bool,
};
