import { useContext } from 'react';
import { UserAuthContext } from '../contexts';
import { PageLayout } from '../layouts/page';
import { Container, Button, Card, Table } from 'react-bootstrap';
import { accessBilling } from '../utils';

const TRStyling = { border: 'none' };

const TDStyling = { border: 'none' };

export const AccountPage = () => {
	const { user } = useContext(UserAuthContext);

	return (
		user && (
			<PageLayout container>
				<div style={{ minHeight: '80vh' }}>
					<Container style={{ paddingTop: '80px' }}>
						<div
							className='container'
							style={{ paddingBottom: '65px' }}
						>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div style={{ width: '100%' }}>
									<h1 className='h3'>User Account</h1>
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
										<div
											style={{
												width: '100%',
												display: 'flex',
											}}
										>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													width: '100%',
												}}
											>
												<img
													style={{
														width: '12%',
														borderRadius: '10px',
													}}
													src={user.avatar}
												/>

												<div
													style={{
														paddingLeft: '25px',
														width: '100%',
													}}
												>
													<div
														style={{
															width: '100%',
															display: 'flex',
															alignItems:
																'center',
														}}
													>
														<h1>{user.username}</h1>

														<Button
															style={{
																marginLeft:
																	'auto',
																borderColor:
																	'rgb(255, 98, 0)',
																backgroundColor:
																	'rgb(255, 98, 0)',
																fontWeight:
																	'700',
																marginRight:
																	'25px',
															}}
															onClick={() =>
																accessBilling().then(
																	({
																		data,
																	}) => {
																		if (
																			data.error
																		)
																			return alert(
																				data.error
																			);

																		window.location.href =
																			data.url;
																	}
																)
															}
														>
															Access Billing
															Portal
														</Button>
													</div>

													<p
														style={{
															padding: '0',
															margin: '0',
															fontWeight: '700',
															fontSize: '20px',
														}}
													>
														({user.userId})
													</p>
												</div>
											</div>
										</div>
									</Card>
								</Card>
							</div>

							<div className='row' style={{ paddingTop: '30px' }}>
								<div className='col-md-6'>
									<div>
										<h1 className='h4'>Subscriptions</h1>

										<Card
											bg='secondary'
											text='light'
											style={{
												color: 'black',
												border: '3px solid',
												borderColor: 'rgb(255, 98, 0)',
												marginTop: '25px',
											}}
										>
											<Card
												body
												style={{
													backgroundColor:
														'rgb(33, 37, 41)',
													borderColor:
														'rgb(33, 37, 41)',
												}}
											>
												<Table
													style={{
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
															<td
																style={
																	TDStyling
																}
															>
																Adrens Store
																Theme
															</td>
															<td
																style={
																	TDStyling
																}
															>
																Theme
															</td>
														</tr>
														<tr style={TRStyling}>
															<td
																style={
																	TDStyling
																}
															>
																Upgraded Hosting
																- Monthly
																Subscription
															</td>
															<td
																style={
																	TDStyling
																}
															>
																Hosting
															</td>
														</tr>
													</tbody>
												</Table>
											</Card>
										</Card>
									</div>
								</div>
								<div className='col-md-6'>
									<div>
										<h1 className='h4'>Purchased Assets</h1>

										<Card
											bg='secondary'
											text='light'
											style={{
												color: 'black',
												border: '3px solid',
												borderColor: 'rgb(255, 98, 0)',
												marginTop: '25px',
											}}
										>
											<Card
												body
												style={{
													backgroundColor:
														'rgb(33, 37, 41)',
													borderColor:
														'rgb(33, 37, 41)',
												}}
											>
												<Table
													style={{
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
															<td
																style={
																	TDStyling
																}
															>
																Adrens Store
																Theme
															</td>
															<td
																style={
																	TDStyling
																}
															>
																Theme
															</td>
														</tr>
														<tr style={TRStyling}>
															<td
																style={
																	TDStyling
																}
															>
																Upgraded Hosting
																- Monthly
																Subscription
															</td>
															<td
																style={
																	TDStyling
																}
															>
																Hosting
															</td>
														</tr>
													</tbody>
												</Table>
											</Card>
										</Card>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</PageLayout>
		)
	);
};
