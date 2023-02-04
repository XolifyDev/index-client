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
			<div
				style={{
					position: 'absolute',
					zIndex: '600',
					width: '100%',
					height: '50vh',
				}}
			>
				<Header />
			</div>

			<Helmet>
				<style>
					{`
						.diagonal-box {
							background-image: linear-gradient(45deg, rgb(255, 98, 0), rgb(255, 98, 0));
							height: 500px;
							transform: skewY(-1deg);
						}
						
						.content {
							max-width: 100vw;
							margin: 0 auto;
							transform: skewY(1deg);
						}
					`}
				</style>
			</Helmet>

			<div style={{ paddingTop: '50vh' }}>
				<div
					style={{
						width: '100%',
						height: '45px',
						position: 'absolute',
						backgroundColor: 'rgb(255, 98, 0)',
						zIndex: '60',
					}}
				></div>

				<div
					style={{
						height: '500px',
						width: '100%',
						zIndex: '45',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
					}}
				>
					<div className='row'>
						<div
							className='row'
							style={{
								paddingTop: '65px',
								paddingBottom: '65px',
							}}
						>
							<div
								className='col-md-6'
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'right',
								}}
							>
								<Carousel style={{ marginRight: '25px' }}>
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
														borderRadius: '15px',
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
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										marginLeft: '25px',
										width: '80%',
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

									<div style={{ paddingTop: '20px' }}>
										<Button
											size='lg'
											href='/templates?template=store'
											style={{
												fontWeight: '700',
												backgroundColor:
													'rgb(38, 40, 43)',
												borderColor: 'rgb(38, 40, 43)',
												width: '200px',
											}}
										>
											View Theme
										</Button>
										<Button
											size='lg'
											target='_blank'
											href='https://demo.fivem.design/?demo=store'
											style={{
												fontWeight: '700',
												backgroundColor:
													'rgb(38, 40, 43)',
												borderColor: 'rgb(38, 40, 43)',
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
					</div>
				</div>

				<div style={{ height: '500px' }}>
					<div class='diagonal-box'>
						<Container>
							<div class='content'></div>
						</Container>
					</div>
				</div>
			</div>

			<div
				style={{
					marginTop: '65px',
					overflow: 'none',
				}}
			>
				<DevelopersContainer />
			</div>
		</PageLayout>
	);
};
