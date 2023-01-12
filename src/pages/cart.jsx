import { useState } from 'react';
import { Container, Card, Table, Button } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';

export const UserCartPage = () => {
	const user = {};

	const TRStyling = { border: 'none' };

	const TDStyling = { border: 'none' };

	const [CartItems, setCartItems] = useState([]);

	return (
		<PageLayout container>
			<Container style={{ paddingTop: '80px' }}>
				<div className='container' style={{ paddingBottom: '65px' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<div style={{ width: '100%' }}>
							<h1 className='h3'>Shopping Cart</h1>
						</div>
					</div>

					<hr />

					<div
						style={{
							width: '100%',
							paddingTop: '20px',
						}}
					>
						<Card
							bg='secondary'
							text='light'
							style={{
								color: 'black',
								border: '3px solid',
								borderColor: 'rgb(255, 98, 0)',
							}}
						>
							<Card
								body
								style={{
									backgroundColor: 'rgb(33, 37, 41)',
									borderColor: 'rgb(33, 37, 41)',
								}}
							>
								{CartItems.length !== 0 ? (
									<div className='row'>
										<div className='col-md-6'>
											<h1 className='h4'>Items</h1>

											<Table
												style={{
													marginTop: '15px',
													border: 'none',
													color: '#eee',
												}}
											>
												<thead>
													<tr>
														<th>Asset Name</th>
														<th>Asset Type</th>
													</tr>
												</thead>
												<tbody>
													<tr style={TRStyling}>
														<td style={TDStyling}>
															Adrens Store Theme
														</td>
														<td style={TDStyling}>
															Theme
														</td>
													</tr>
													<tr style={TRStyling}>
														<td style={TDStyling}>
															Upgraded Hosting -
															Monthly Subscription
														</td>
														<td style={TDStyling}>
															Hosting
														</td>
													</tr>
												</tbody>
											</Table>
										</div>
										<div className='col-md-6'>
											<Button
												style={{
													width: '100%',
													fontWeight: '700',
												}}
											>
												Checkout with Stripe
											</Button>
										</div>
									</div>
								) : (
									<div style={{ textAlign: 'center' }}>
										<h1
											className='h2'
											style={{
												padding: '25px',
												fontWeight: '700',
												fontStyle: 'italic',
											}}
										>
											No Items!
										</h1>

										<p>
											To begin, please either add a{' '}
											<a href='/templates'>Template</a> or
											a{' '}
											<a href='/hosting'>
												Hosting Option
											</a>
										</p>
									</div>
								)}
							</Card>
						</Card>
					</div>
				</div>
			</Container>
		</PageLayout>
	);
};
