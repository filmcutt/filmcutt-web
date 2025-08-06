import { useEffect, useState } from 'react';
import PricingTable from '.';
import Section from '../Div';
import Spacing from '../Spacing';

export default function PricingTableList({ serviceDetails = [] }) {
	console.log(serviceDetails);

	const [tab, setTab] = useState('monthly');
	const [hasYearly, setHasYearly] = useState(false);

	useEffect(() => {
		// Check if any item has yearly options
		const checkYearlyOptions = serviceDetails.some(
			item => item.options && item.options.yearly
		);
		setHasYearly(checkYearlyOptions);
		// If there are no yearly options, default the tab to 'monthly'
		if (!checkYearlyOptions && tab === 'yearly') {
			setTab('monthly');
		}
	}, [serviceDetails, tab]);

	return (
		<Section className="position-relative">
			<ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
				<li
					className={tab === 'monthly' ? 'active' : ''}
					onClick={() => setTab('monthly')}
				>
					Monthly
				</li>
				{hasYearly && (
					<li
						className={tab === 'yearly' ? 'active' : ''}
						onClick={() => setTab('yearly')}
					>
						Yearly
					</li>
				)}
			</ul>
			<Section className="row">
				{serviceDetails?.map(item => (
					<Section className="col-lg-4" key={item?.name}>
						{tab === 'monthly' && (
							<PricingTable
								title={item?.name}
								price={item?.price}
								currency={item?.currencySymbol}
								timeline={item?.unit}
								features={item?.features}
								btnText="Purchase Now"
								btnLink={`/purchase?type=monthly&name=${item?.name}&category=${item?.category}`}
							/>
						)}
						{item.options && tab === 'yearly' && item.options.yearly && (
							<PricingTable
								title={item?.name}
								price={item?.options?.yearly?.price}
								currency={item?.currencySymbol}
								timeline={item?.unit}
								features={item?.features}
								btnText="Purchase Now"
								btnLink={`/purchase?type=yearly&name=${item?.name}&category=${item?.category}`}
							/>
						)}
						<Spacing lg="25" md="25" />
					</Section>
				))}
			</Section>
		</Section>
	);
}
