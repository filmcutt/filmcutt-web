'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Div from '../ui/Div';
import Spacing from '../ui/Spacing';

const PurchaseContent = () => {
	const searchParams = useSearchParams();
	const packageCategory = searchParams.get('category');
	const billingPeriod = searchParams.get('type');
	const packageName = searchParams.get('name');
	const router = useRouter();

	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		details: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState({
		error: '',
		success: '',
	});

	if (!packageCategory || !billingPeriod || !packageName) {
		return <div>Loading...</div>;
	}

	const handleInputChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		setMessage(''); // Clear previous message

		try {
			const body = {
				...formData,
				projectType: billingPeriod,
				projectName: packageName,
				projectCategory: packageCategory,
			};
			const response = await fetch('/api/purchase', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			console.log({ response, body });
			if (!response.ok) {
				throw new Error('Failed to submit purchase request');
			}

			const result = await response.json();
			setMessage({
				error: '',
				success: 'Purchase request submitted successfully!',
			});

			// Redirect to the Thank You page
			setTimeout(() => {
				router.push('/thank-you');
			}, 2000); // Redirect after 2 seconds to allow user to see the success message

			// Reset form fields
			setFormData({
				name: '',
				contact: '',
				details: '',
			});
		} catch (error) {
			setMessage({
				error: 'Error submitting purchase request. Please try again.',
				success: '',
			});
			console.error('Error submitting purchase request:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Div className="container min-h-lvh flex flex-col md:flex-row items-center md:justify-between justify-center divide-y md:divide-y-0 md:divide-x divide-dashed divide-slate-400 md:mt-12">
			<Div className="flex flex-col items-center mx-auto basis-1/2 py-5 md:py-0">
				<h1 className="text-xl mb-4 text-white/80">Directly connect with us</h1>
				<Div className="flex gap-8 items-center">
					<Link href="https://us05web.zoom.us/j/5925222962?pwd=paucPBfkBL7tYTvyiTxTYEabrcJyrg.1">
						<Image
							width={100}
							height={100}
							src={'/Zoom-Icon.svg'}
							className="w-20 h-20 cursor-pointer"
							alt="Zoom Icon"
						/>
					</Link>
					<Link href="https://wa.me/01870506803">
						<Image
							width={80}
							height={80}
							src={'/whatsapp-icon.png'}
							className="w-12 h-12"
							alt="WhatsApp Icon"
						/>
					</Link>
					<Link href="https://calendly.com/filmcutt4-ofy0">
						<Image
							width={100}
							height={100}
							src={'/calendly-icon.png'}
							className="w-40 h-10 cursor-pointer"
							alt="Calendly Icon"
						/>
					</Link>
				</Div>
			</Div>
			<div className="basis-1/2 py-5 md:py-0 container md:pl-10">
				<Div className="flex flex-col mx-auto basis-1/2">
					<h1 className="text-sm text-white/80 leading-relaxed">
						You've selected{' '}
						<span className="font-bold">
							{packageName} - {packageCategory}
						</span>{' '}
						<br />
						package for <span className="font-bold">{billingPeriod}.</span>{' '}
						<br />
					</h1>

					<Spacing lg="20" md="20" />

					<form onSubmit={handleSubmit} className="row">
						<Div className="col-sm-12">
							<label className="cs-primary_color">Name*</label>
							<input
								type="text"
								name="name"
								className="cs-form_field"
								value={formData.name}
								onChange={handleInputChange}
								required
							/>
							<Spacing lg="20" md="20" />
						</Div>
						<Div className="col-sm-12">
							<label className="cs-primary_color">
								Contact*{' '}
								<span className="opacity-60 text-xs">(Whatsapp preferred)</span>
							</label>
							<input
								type="text"
								name="contact"
								className="cs-form_field"
								placeholder="Phone/Email"
								value={formData.contact}
								onChange={handleInputChange}
								required
							/>
							<Spacing lg="20" md="20" />
						</Div>
						<Div className="col-sm-12">
							<label className="text-slate-400">
								Lets write your project details, we will contact you! *{' '}
							</label>
							<textarea
								name="details"
								rows={4}
								className="cs-form_field !min-h-16 !max-h-60"
								value={formData.details}
								onChange={handleInputChange}
								required
							/>
							<Spacing lg="20" md="20" />
						</Div>

						<Div className="col-sm-12">
							<button
								className="cs-btn cs-style1"
								type="submit"
								disabled={isLoading}
							>
								<span>{isLoading ? 'Sending...' : 'Get in touch'}</span>
								<Icon icon="bi:arrow-right" />
							</button>
						</Div>
					</form>
					{/* Display message if exists */}
					{message.error && (
						<Div className="mt-4 text-red-500">
							<p>{message.error}</p>
						</Div>
					)}

					{message.success && (
						<Div className="mt-4 text-green-500">
							<p>{message.success}</p>
						</Div>
					)}
				</Div>
			</div>
		</Div>
	);
};

const Purchase = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<PurchaseContent />
	</Suspense>
);

export default Purchase;
