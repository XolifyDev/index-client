import { useEffect, useContext } from 'react';
import { UserAuthContext } from '../contexts';
import { silentUpdate, useQuery } from '../utils';
import { Helmet } from 'react-helmet';
import { PageLayout } from '../layouts/page';
import { Header } from '../components/header';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
					marginBottom: '75px',
					maxHeight: '450px',
					overflow: 'none',
				}}
			>
				<Container>
					<div
						style={{
							display: 'flex',
							width: '100%',
							marginBottom: '50px',
						}}
					>
						<div
							style={{
								width: '75%',
								textAlign: 'left',
							}}
						>
							<h1>Testemionals</h1>

							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Iure odit atque illo mollitia
								nisi reprehenderit aut fugit nobis et
								laboriosam. Laudantium consequatur voluptatum
								quas, fugit tenetur saepe rem reprehenderit
								illum?
							</p>
						</div>
					</div>
				</Container>

				<div>
					<div class='diagonal-box'>
						<Container>
							<div
								class='content'
								style={{
									paddingTop: '45px',
									paddingBottom: '45px',
								}}
							>
								<div className='row'>
									<div
										className='col-md-6'
										style={{
											height: '500px',
											width: '600px',
											transform: 'skewY(-1deg)',
										}}
									>
										<img
											src={Templates[0].template}
											style={{ width: '600px' }}
										/>

										<h1
											className='h2'
											style={{
												color: 'black',
												marginTop: '2vh',
												fontWeight: '700',
											}}
										>
											RolePlay Community Site
										</h1>

										<Button
											size='lg'
											style={{
												fontWeight: '700',
												backgroundColor:
													'rgb(38, 40, 43)',
												borderColor: 'rgb(38, 40, 43)',
											}}
										>
											Demo Theme
										</Button>
									</div>

									<div
										className='col-md-6'
										style={{
											color: 'black',
											paddingLeft: '50px',
											paddingTop: '15px',
										}}
									>
										<h1
											className='h3'
											style={{ color: '#eee' }}
										>
											Features
										</h1>

										<ul
											style={{
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
														Departments setup
													</li>
												</div>
												<div className='col-md-6'>
													<li
														style={{
															fontWeight: '700',
														}}
													>
														AdrenCAD integration
													</li>
												</div>
											</div>
										</ul>
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
