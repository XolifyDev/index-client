import { Container, Button, Card, Table } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';

const TRStyling = { border: 'none' };

const TDStyling = { border: 'none' };

export const AccountPage = () => {
	return (
		<PageLayout container>
			<Container style={{ paddingTop: '80px' }}>
				<div className='container' style={{ paddingBottom: '65px' }}>
					<div
						style={{
							// paddingBottom: '20px',
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
										// alignItems: 'center',
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
											src={
												'https://avatars.akamai.steamstatic.com/c9180f93ac892fa7d078f5946239d049e987e3b6.jpg'
											}
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
													alignItems: 'center',
												}}
											>
												<h1>IamAdren</h1>

												<Button
													style={{
														marginLeft: 'auto',
														borderColor:
															'rgb(255, 98, 0)',
														backgroundColor:
															'rgb(255, 98, 0)',
														fontWeight: '700',
														marginRight: '25px',
													}}
												>
													Copy ID
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
												(1231238912873119238)
											</p>
										</div>
									</div>
								</div>
							</Card>
						</Card>
					</div>

					<div style={{ paddingTop: '30px' }}>
						<h1 className='h4'>User Assets</h1>

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
									backgroundColor: 'rgb(33, 37, 41)',
									borderColor: 'rgb(33, 37, 41)',
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
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
										</tr>
									</thead>
									<tbody>
										<tr style={TRStyling}>
											<td style={TDStyling}>1</td>
											<td style={TDStyling}>Mark</td>
											<td style={TDStyling}>Otto</td>
											<td style={TDStyling}>@mdo</td>
										</tr>
										<tr style={TRStyling}>
											<td style={TDStyling}>1</td>
											<td style={TDStyling}>Mark</td>
											<td style={TDStyling}>Otto</td>
											<td style={TDStyling}>@mdo</td>
										</tr>
										<tr style={TRStyling}>
											<td style={TDStyling}>1</td>
											<td style={TDStyling}>Mark</td>
											<td style={TDStyling}>Otto</td>
											<td style={TDStyling}>@mdo</td>
										</tr>
										<tr style={TRStyling}>
											<td style={TDStyling}>1</td>
											<td style={TDStyling}>Mark</td>
											<td style={TDStyling}>Otto</td>
											<td style={TDStyling}>@mdo</td>
										</tr>
									</tbody>
								</Table>
							</Card>
						</Card>
					</div>
				</div>
			</Container>
		</PageLayout>
	);
};
