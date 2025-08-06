'use client';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Div from '../../app/ui/Div';
import PageHeading from '../../app/ui/PageHeading';
import SectionHeading from '../../app/ui/SectionHeading';
import Spacing from '../../app/ui/Spacing';
import ContactInfoWidget from '../../app/ui/Widget/ContactInfoWidget';
import countries from '../../data/countries.json';
import services from '../../data/services.json';

export default function ContactPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState({
		status: false,
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	// Sort countries alphabetically by name
	const sortedCountries = [...countries].sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	const handleSubmit = async event => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const formFields = {
			name: formData.get('fullName'),
			email: formData.get('email'),
			projectType: formData.get('projectType'),
			phone: formData.get('mobile'),
			knowAboutUs: formData.get('referralSource'),
			country: formData.get('residence'),
			message: formData.get('message'),
		};

		setIsLoading(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formFields),
			});

			if (response.ok) {
				setIsSubmitted(true);
				setError({ status: false, message: '' });
				event.target.reset(); // Reset form fields after submission
			} else {
				const errorData = await response.json();
				setError({
					status: true,
					message: errorData.message || 'Submission failed. Please try again.',
				});
				setIsSubmitted(false);
			}
		} catch (error) {
			setError({
				status: true,
				message: 'An unexpected error occurred. Please try again later.',
			});
			setIsSubmitted(false);
		} finally {
			setIsLoading(false);
		}
	};

	// Clear success or error message after 3 seconds
	useEffect(() => {
		if (isSubmitted || error.status) {
			const timer = setTimeout(() => {
				setIsSubmitted(false);
				setError({ status: false, message: '' });
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [isSubmitted, error]);

	return (
		<>
			<PageHeading
				title="Contact Us"
				bgSrc="/images/contact_hero_bg.jpeg"
				pageLinkText="Contact"
			/>
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div className="row">
					<Div className="col-lg-6">
						<SectionHeading
							title="Do you have a project <br/>in your mind?"
							subtitle="Getting in Touch"
						/>
						<Spacing lg="55" md="30" />
						<ContactInfoWidget withIcon />
						<Spacing lg="0" md="50" />
					</Div>
					<Div className="col-lg-6">
						<form onSubmit={handleSubmit} className="row">
							<Div className="col-sm-6">
								<label className="cs-primary_color">Full Name*</label>
								<input
									type="text"
									name="fullName"
									className="cs-form_field"
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">Email*</label>
								<input
									type="email"
									name="email"
									className="cs-form_field"
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label htmlFor="projectType">Project Type*</label>
								<select
									id="projectType"
									name="projectType"
									className="cs-form_field !bg-[#181818]"
									required
								>
									<option value="">Choose...</option>
									{services.map(item => (
										<option key={item.name} value={item.name}>
											{item.name}
										</option>
									))}
								</select>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label className="cs-primary_color">
									Mobile*{' '}
									<span className="opacity-60">(WhatsApp preferred)</span>
								</label>
								<input
									type="text"
									name="mobile"
									className="cs-form_field"
									required
								/>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label htmlFor="referralSource">
									How did you hear about us?*
								</label>
								<select
									id="referralSource"
									name="referralSource"
									className="cs-form_field !bg-[#181818]"
									required
								>
									<option value="">Choose...</option>
									<option value="facebook">Facebook</option>
									<option value="instagram">Instagram</option>
									<option value="linkedin">LinkedIn</option>
								</select>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-6">
								<label htmlFor="residence">Where do you reside?*</label>
								<select
									id="residence"
									name="residence"
									className="cs-form_field !bg-[#181818]"
									required
								>
									<option value="">Choose...</option>
									{sortedCountries.map(country => (
										<option key={country.id} value={country.name}>
											{country.name}
										</option>
									))}
								</select>
								<Spacing lg="20" md="20" />
							</Div>
							<Div className="col-sm-12">
								<label className="cs-primary_color">Message*</label>
								<textarea
									cols="30"
									rows="7"
									name="message"
									className="cs-form_field"
									required
								></textarea>
								<Spacing lg="25" md="25" />
							</Div>
							<Div className="col-sm-12">
								<button
									className="cs-btn cs-style1"
									type="submit"
									disabled={isLoading}
								>
									<span>{isLoading ? 'Sending...' : 'Send Message'}</span>
									<Icon icon="bi:arrow-right" />
								</button>
							</Div>
							<Div className="col-sm-12">
								{error.status && (
									<Div className="text-red-600">{error.message}</Div>
								)}
								{isSubmitted && (
									<Div className="text-green-600">
										Message sent successfully!
									</Div>
								)}
							</Div>
						</form>
					</Div>
				</Div>
			</Div>
			<Spacing lg="150" md="80" />
			<Div className="cs-google_map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48327.57936983314!2d-74.3093357!3d40.6970193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1690819406406!5m2!1sen!2sbd"
					allowFullScreen
					title="Google Map"
				/>
			</Div>
			<Spacing lg="50" md="40" />
		</>
	);
}
