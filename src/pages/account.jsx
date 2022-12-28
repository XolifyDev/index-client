import { PageLayout } from '../layouts/page';
import { Container, Button, Card } from 'react-bootstrap';

export const AccountPage = () => {
	return (
		<PageLayout container>
			<Container style={{ paddingTop: '80px' }}>
				<div className='container'>
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

						{/* <div style={{ marginLeft: 'auto' }}>
							<Button
								size='sm'
								// onClick={resetData}
								// disabled={FetchingSites}
								style={{
									fontWeight: '700',
									backgroundColor: 'rgb(63, 65, 66)',
									borderColor: 'rgb(63, 65, 66)',
									marginRight: '10px',
								}}
							>
								<i className='fas fa-sync-alt'></i> Refresh data
							</Button>
							<Button
								size='sm'
								// disabled={FetchingSites}
								style={{
									fontWeight: '700',
									backgroundColor: 'rgb(255, 98, 0)',
									borderColor: 'rgb(255, 98, 0)',
								}}
								// onClick={() => {
								// 	setShowCreateModal(true);
								// }}
							>
								<i className='fas fa-plus'></i> Create New Site
							</Button>
						</div> */}
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
				</div>
			</Container>
		</PageLayout>
	);
};
