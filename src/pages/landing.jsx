import { Helmet } from 'react-helmet';
import { useEffect, useContext } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { DevelopersContainer } from '../components/developers';
import { silentUpdate, useQuery } from '../utils';
import { UserAuthContext } from '../contexts';
import { PageLayout } from '../layouts/page';
import { Header } from '../components/header';

import Templates from '../templates';

export const LandingPage = () => {
	const query = useQuery();

	const { setUserToken } = useContext(UserAuthContext);

	const fetchToken = () => {
		const token = query.get('token');

		if (!token) return;

		setUserToken(token);

		silentUpdate('/');
	};

	useEffect(fetchToken, []);

	return (
		<PageLayout>
			<Header />

			<Helmet>
				<style>
					{`
						.diagonal-box {
							background-image: linear-gradient(45deg, rgb(255, 98, 0), rgb(255, 98, 0));
							transform: skewY(-1deg);
						}
						
						.content {
							max-width: 100vw;
							margin: 0 auto;
							height: 500px;
							transform: skewY(1deg);
						}
					`}
				</style>
			</Helmet>

			<div
				style={{
					marginTop: '65px',
					overflow: 'none',
				}}
			>
				<DevelopersContainer />

				<div>
					<div class='diagonal-box'>
						<Container>
							<div class='content'>
								<div
									className='row'
									style={{
										height: '100%',
										display: 'flex',
									}}
								>
									<div
										className='col-md-6'
										style={{
											transform: 'skewY(-1deg)',
											display: 'flex',
											height: '100%',
											alignItems: 'center',
										}}
									>
										<Carousel>
											{[
												{
													src: Templates[0].template,
												},
												...Templates[0].previewImgs,
											].map((img) => {
												return (
													<Carousel.Item>
														<img
															src={img.src}
															style={{
																width: '600px',
																borderRadius:
																	'15px',
															}}
														/>
													</Carousel.Item>
												);
											})}
										</Carousel>
									</div>

									<div
										className='col-md-6'
										style={{
											color: 'black',
											paddingLeft: '25px',
											paddingTop: '125px',
											transform: 'skewY(-1deg)',
										}}
									>
										<h1
											className='h2'
											style={{
												color: '#eee',
												fontWeight: '700',
											}}
										>
											Adrens Store
										</h1>

										<ul
											style={{
												paddingTop: '20px',
												marginLeft: '5px',
												color: '#eee',
											}}
										>
											<div className='row'>
												<div className='col-md-6'>
													<li
														style={{
															fontWeight: '700',
														}}
													>
														Easy to setup
													</li>
												</div>
												<div className='col-md-6'>
													<li
														style={{
															fontWeight: '700',
														}}
													>
														Advanced Analytics
													</li>
												</div>
												<div className='col-md-6'>
													<li
														style={{
															fontWeight: '700',
														}}
													>
														Advanced Analytics
													</li>
												</div>
												<div className='col-md-6'>
													<li
														style={{
															fontWeight: '700',
														}}
													>
														Advanced Analytics
													</li>
												</div>
												<div className='col-md-6'>
													<li
														style={{
															fontWeight: '700',
														}}
													>
														Tebex integration
													</li>
												</div>
											</div>
										</ul>

										<div
											style={{
												width: '80%',
												textAlign: 'center',
												paddingTop: '25px',
											}}
										>
											<Button
												size='lg'
												target='_blank'
												href='https://demo.fivem.design/?demo=store'
												style={{
													fontWeight: '700',
													backgroundColor:
														'rgb(38, 40, 43)',
													borderColor:
														'rgb(38, 40, 43)',
													width: '200px',
													marginLeft: '15px',
												}}
											>
												Purchase Theme
											</Button>
											<Button
												size='lg'
												target='_blank'
												href='https://demo.fivem.design/?demo=store'
												style={{
													fontWeight: '700',
													backgroundColor:
														'rgb(38, 40, 43)',
													borderColor:
														'rgb(38, 40, 43)',
													width: '200px',
													marginLeft: '25px',
												}}
											>
												Demo Theme
											</Button>
										</div>
									</div>
								</div>
							</div>
						</Container>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};
