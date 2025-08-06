import { useEffect, useState } from 'react';
import Div from '../Div';

export default function Newsletter({ title, subtitle, placeholder }) {
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [error, setError] = useState({
		status: false,
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault(); // Prevent the default form submission

		const formData = new FormData(event.target);
		const email = formData.get('email');

		setIsLoading(true); // Set loading state to true

		try {
			const response = await fetch('/api/subscription', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }), // Pass the email in the body
			});

			if (response.ok) {
				setIsSubscribed(true);
				setError({ status: false, message: '' });
				event.target.reset(); // Clear the input field
			} else {
				// Extract error message from the response if available
				const errorData = await response.json();
				setError({
					status: true,
					message: errorData.message || 'Subscription failed',
				});
				setIsSubscribed(false);
			}
		} catch (error) {
			// Handle unexpected errors
			setError({ status: true, message: 'An unexpected error occurred' });
			setIsSubscribed(false);
		} finally {
			setIsLoading(false); // Reset loading state regardless of success or failure
		}
	};

	// Reset subscription status or error message after a delay
	useEffect(() => {
		if (isSubscribed || error.status) {
			const timer = setTimeout(() => {
				setIsSubscribed(false);
				setError({ status: false, message: '' });
			}, 3000);

			// Cleanup the timer on component unmount or effect re-run
			return () => clearTimeout(timer);
		}
	}, [isSubscribed, error]);

	return (
		<>
			{title && <h2 className="cs-widget_title">{title}</h2>}
			<Div className="cs-newsletter cs-style1">
				<form onSubmit={handleSubmit} className="cs-newsletter_form">
					<input
						type="email"
						name="email"
						className="cs-newsletter_input"
						placeholder={placeholder}
						required
					/>
					<button
						className="cs-newsletter_btn"
						type="submit"
						disabled={isLoading}
					>
						<span>{isLoading ? 'Sending...' : 'Send'}</span>
					</button>
				</form>
				{error.status && <Div className="text-red-600">{error.message}</Div>}
				{isSubscribed && <Div className="text-green-600">Thank you!</Div>}
				<Div className="cs-newsletter_text">{subtitle}</Div>
			</Div>
		</>
	);
}
