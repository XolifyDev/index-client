import { Container, Card, Button } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';
import { Templates } from '../components/templates';
import { TrialBadge } from '../components/trialBadge';
import { UpgradeModal } from '../components/upgradeModal';
import { useState } from 'react';

const TierCard = ({ name, price, features, setShowUpgradeModal }) => (
	<Card
		bg='secondary'
		text='light'
		style={{
			color: 'black',
			border: '3px solid',
			borderColor: 'rgb(255, 98, 0)',
		}}
	>
		<Card.Body
			style={{
				height: '500px',
				borderRadius: '1.5px',
				backgroundColor: 'rgb(33, 37, 41)',
			}}
		>
			<div style={{ height: '80%' }}>
				<div
					style={{
						marginTop: '12.5px',
						height: '85px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div>
						<Card.Title
							style={{
								fontSize: '30px',
								fontWeight: '700',
								fontStyle: 'italic',
							}}
						>
							{name}
						</Card.Title>

						{price && (
							<p
								style={{
									fontWeight: '700',
									padding: '0',
									margin: '0',
								}}
							>
								{price}
							</p>
						)}
					</div>
				</div>

				<div
					style={{
						width: '100%',
						margin: 'auto',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<hr style={{ width: '85%' }} />
				</div>

				<div>
					<p
						style={{
							fontWeight: '700',
							fontSize: '20px',
							margin: '0',
							padding: '0',
						}}
					>
						Features
					</p>

					<div
						style={{
							width: '85%',
							margin: 'auto',
							paddingTop: '20px',
						}}
					>
						{features.map((feature) => (
							<div
								style={{
									textAlign: 'left',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										width: '20%',
										textAlign: 'center',
									}}
								>
									<p style={{ fontSize: '20px' }}>
										{feature.enabled ? (
											<i className='fas fa-check'></i>
										) : (
											<i className='fas fa-times'></i>
										)}
									</p>
								</div>

								<div>
									<p>{feature.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{price && (
				<div style={{ height: '20%' }}>
					<div
						style={{
							width: '100%',
							margin: 'auto',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<hr style={{ width: '85%' }} />
					</div>

					<div>
						<div style={{ width: '85%', margin: 'auto' }}>
							<Button
								onClick={() => setShowUpgradeModal(true)}
								style={{
									width: '100%',
									fontWeight: '700',
									backgroundColor: 'rgb(255, 98, 0)',
									borderColor: 'rgb(255, 98, 0)',
								}}
							>
								Upgrade Site
							</Button>
						</div>
					</div>
				</div>
			)}
		</Card.Body>
	</Card>
);

export const HostingPage = () => {
	const [ShowUpgradeModal, setShowUpgradeModal] = useState(false);

	return (
		<PageLayout container>
			<UpgradeModal
				show={ShowUpgradeModal}
				setShow={setShowUpgradeModal}
			/>

			<div style={{ minHeight: '75vh' }}>
				<Container style={{ paddingTop: '80px' }}>
					<TrialBadge />

					<div className='container' style={{ textAlign: 'center' }}>
						<h1 className='h3' style={{ paddingBottom: '10px' }}>
							Hosting Plans
						</h1>

						<div className='row' style={{ paddingBottom: '15px' }}>
							<div className='col-md-2'></div>
							<div className='col-md-8'>
								<hr />
							</div>
						</div>

						<div style={{ paddingBottom: '20px' }}>
							<div className='row'>
								<div className='col-md-2'></div>
								<div className='col-md-4'>
									<TierCard
										setShowUpgradeModal={
											setShowUpgradeModal
										}
										name='Upgraded Hosting'
										price='$10 Per Month'
										features={[
											{
												name: 'Custom Domains',
												enabled: true,
											},
											{
												name: 'Discord Integration',
												enabled: true,
											},
											{
												name: 'Advanced Analytics',
												enabled: true,
											},
										]}
									/>
								</div>
								<div className='col-md-4'>
									<TierCard
										setShowUpgradeModal={
											setShowUpgradeModal
										}
										name='Free Hosting'
										features={[
											{
												name: 'Discord Integration',
												enabled: true,
											},
											{
												name: 'Custom Domains',
												enabled: false,
											},
										]}
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</PageLayout>
	);
};
