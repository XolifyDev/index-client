import { useEffect, useState } from 'react';
import { Container, Button, Card, Spinner } from 'react-bootstrap';
import { fetchDevelopers, shuffle } from '../utils';

export const DevelopersContainer = ({ full }) => {
	const [Developers, setDevelopers] = useState([]);

	const [FinishedLoading, setFinishedLoading] = useState(false);

	useEffect(() => {
		setFinishedLoading(false);

		fetchDevelopers().then(({ data }) => {
			if (data.error) return;

			setDevelopers(data.developers);

			setFinishedLoading(true);
		});
	}, []);

	return (
		<Container>
			<div
				style={{
					display: 'flex',
					width: '100%',
					// height: '250px',
					marginBottom: '50px',
				}}
			>
				<div
					style={{
						width: '100%',
						textAlign: 'left',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<h1 className='h3'>
							Developers Using{' '}
							<a href='#' style={{ color: '#eee' }}>
								Adrens Store
							</a>
						</h1>

						{!full && (
							<Button
								href='/developers'
								style={{
									marginLeft: 'auto',
									fontWeight: '700',
									backgroundColor: 'rgb(63, 65, 66)',
									borderColor: 'rgb(63, 65, 66)',
								}}
							>
								View Other Developers
							</Button>
						)}
					</div>

					{FinishedLoading ? (
						<div className='row' style={{ paddingTop: '25px' }}>
							{(full
								? Developers
								: (() => {
										let shuffled = shuffle(Developers);

										let developers = [];

										for (let i = 0; i < 4; i++) {
											const dev = shuffled[i];

											if (dev) developers.push(dev);
										}

										return developers;
								  })()
							).map((dev) => (
								<div
									className='col-md-3'
									style={
										full ? { marginBottom: '25px' } : null
									}
								>
									<Card
										style={{
											backgroundColor: 'rgb(33, 37, 41)',
											border: '3px solid',
											borderColor: 'rgb(255, 98, 0)',
										}}
									>
										<Card
											body
											style={{
												backgroundColor:
													'rgb(33, 37, 41)',
												borderColor: 'rgb(33, 37, 41)',
											}}
										>
											<a
												target='_blank'
												href={`https://${dev.src}`}
											>
												<Card.Img src={dev.logo} />
											</a>

											<Card.Title
												style={{
													paddingTop: '10px',
												}}
											>
												<h1 className='h3'>
													{dev.name}
												</h1>
											</Card.Title>

											<hr />

											<Button
												style={{
													width: '100%',
													fontWeight: '700',
													borderColor:
														'rgb(255, 98, 0)',
													backgroundColor:
														'rgb(255, 98, 0)',
												}}
												target='_blank'
												href={`https://${dev.src}`}
											>
												<i className='fas fa-eye'></i>{' '}
												Store Page
											</Button>
										</Card>
									</Card>
								</div>
							))}
						</div>
					) : (
						<div style={{ textAlign: 'center', padding: '35px' }}>
							<Spinner
								animation='border'
								role='status'
								style={{
									fontSize: '30px',
									height: '125px',
									width: '125px',
								}}
							>
								<span className='visually-hidden'>
									Loading...
								</span>
							</Spinner>

							<p
								style={{
									fontSize: '25px',
									fontStyle: 'italic',
									paddingTop: '25px',
									fontWeight: '600',
								}}
							>
								Fetching Developers...
							</p>
						</div>
					)}
				</div>
			</div>
		</Container>
	);
};
