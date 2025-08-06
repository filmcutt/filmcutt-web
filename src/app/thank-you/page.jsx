'use client';
import { useEffect, useState } from 'react';
import Div from '../ui/Div';

const ThankYou = () => {
	const [seconds, setSeconds] = useState(5);

	useEffect(() => {
		// Countdown logic
		const interval = setInterval(() => {
			setSeconds(prevSeconds => {
				if (prevSeconds <= 1) {
					clearInterval(interval);
					// Redirect to homepage
					window.location.href = '/';
					return 0;
				}
				return prevSeconds - 1;
			});
		}, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<Div className="container min-h-lvh flex justify-center items-center flex-col relative">
			{/* Countdown display */}

			<img src="/thank-you.gif" alt="Thank You" className="mb-4" />
			<h1 className="text-center text-2xl font-bold">Thank You!</h1>
			<p className="text-center text-lg text-slate-400">
				{' '}
				Your request has been submitted successfully. We will get back to you in{' '}
				{seconds} seconds.
			</p>
		</Div>
	);
};

export default ThankYou;
