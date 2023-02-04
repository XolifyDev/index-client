import { useState, useContext } from 'react';
import { Container, Card, Table, Button } from 'react-bootstrap';
import { CartItemsContext } from '../contexts';
import { PageLayout } from '../layouts/page';

import Templates from '../templates';

const Items = [...Templates];

const CartItemCard = ({ product }) => {
	const [CartItems, setCartItems] = useContext(CartItemsContext);

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<div
			style={{
				paddingBottom: '35px',
				width: '95%',
			}}
		>
			<Card
				bg='secondary'
				text='light'
				style={{
					color: 'black',
					border: '3px solid',
					borderColor: 'rgb(255, 98, 0)',
					marginBottom: '35px',
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
							display: 'flex',
							alignItems: 'center',
						}}
					>
						{product.preview && (
							<a href={`/${product.id}`}>
								<Card.Img
									src={product.preview.url}
									style={{
										width: '165px',
										marginRight: '20px',
									}}
								/>
							</a>
						)}

						<div>
							<a
								href={`/${product.id}`}
								style={{
									textDecoration: 'none',
									color: '#eee',
								}}
							>
								<Card.Title>
									<h1
										className='h3'
										style={{
											padding: '0',
											margin: '0',
										}}
									>
										{product.name}
									</h1>
								</Card.Title>
							</a>
						</div>

						<h1
							className='h5'
							style={{
								padding: '0',
								margin: '0',
								marginLeft: 'auto',
								cursor: 'pointer',
							}}
							onClick={(e) => {
								e.preventDefault();

								setCartItems((items) => {
									let newItems = [];

									items.forEach((i) => {
										if (i !== product._id) newItems.push(i);
									});

									return newItems;
								});
							}}
						>
							{product.price == '0'
								? 'FREE'
								: formatter.format(product.price)}{' '}
							<i className='fas fa-window-close'></i>
						</h1>
					</div>
				</Card>
			</Card>
		</div>
	);
};

export const UserCartPage = () => {
	const user = {};

	const TRStyling = { border: 'none' };

	const TDStyling = { border: 'none' };

	const [CartItems, setCartItems] = useContext(CartItemsContext);

	return (
		<PageLayout container>
			<Container style={{ paddingTop: '80px' }}>
				<div className='container' style={{ paddingBottom: '65px' }}>
					<div
						style={{
							width: '100%',
							paddingTop: '20px',
						}}
					>
						{CartItems.length !== 0 ? (
							<div className='row'>
								<div className='col-md-8'>
									<h1
										className='h4'
										style={{
											paddingBottom: '25px',
										}}
									>
										Cart Items
									</h1>

									{Items.map((product) => {
										const inCart = CartItems.includes(
											product.id
										);

										if (inCart) {
											return (
												<CartItemCard
													key={product._id}
													product={product}
												/>
											);
										}
									})}
								</div>
								<div className='col-md-4'>
									<h1
										className='h4'
										style={{
											paddingBottom: '25px',
										}}
									>
										Summary
									</h1>

									<Card
										bg='secondary'
										text='light'
										style={{
											color: 'black',
											border: '3px solid',
											borderColor: 'rgb(255, 98, 0)',
											marginBottom: '35px',
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
											<p
												style={{
													margin: '0',
													padding: '0',
													fontWeight: '700',
													marginBottom: '8px',
													display: 'flex',
												}}
											>
												Total:
												<span
													style={{
														marginLeft: 'auto',
													}}
												>
													{/* ${TotalPrice} */}
												</span>
											</p>
											<p
												style={{
													margin: '0',
													padding: '0',
													fontWeight: '700',
													marginBottom: '8px',
													display: 'flex',
												}}
											>
												Taxes:
												<span
													style={{
														marginLeft: 'auto',
													}}
												>
													None
												</span>
											</p>
											{/* <p
									style={{
										margin: '0',
										padding: '0',
										fontWeight: '700',
										marginBottom: '8px',
										display: 'flex',
									}}
								>
									Digital Fees:
									<span style={{ marginLeft: 'auto' }}>Free</span>
								</p>
								<p
									style={{
										margin: '0',
										padding: '0',
										fontWeight: '700',
										display: 'flex',
									}}
								>
									Total Amount:
									<span style={{ marginLeft: 'auto' }}>$70</span>
								</p> */}
										</Card>
									</Card>

									<h1
										className='h4'
										style={{
											paddingBottom: '15px',
										}}
									>
										Checkout
									</h1>

									{user ? (
										<>
											<Button
												// onClick={stripeCheckout}
												variant='secondary'
												style={{
													width: '100%',
													fontWeight: '700',
													backgroundColor:
														'rgb(84, 61, 255)',
													borderColor:
														'rgb(84, 61, 255)',
												}}
											>
												<i className='fab fa-cc-stripe'></i>{' '}
												Checkout with Stripe
											</Button>

											<Button
												variant='secondary'
												// onClick={paypalCheckout}
												style={{
													width: '100%',
													fontWeight: '700',
													backgroundColor:
														'rgb(0, 48, 135)',
													borderColor:
														'rgb(0, 48, 135)',
													marginTop: '20px',
												}}
											>
												<i className='fab fa-cc-paypal'></i>{' '}
												Checkout with Paypal
											</Button>
										</>
									) : (
										<Button
											variant='secondary'
											href='/login'
											style={{
												width: '100%',
												fontWeight: '700',
												backgroundColor: '#5865F2',
												borderColor: '#5865F2',
											}}
										>
											<i className='fab fa-discord'></i>{' '}
											Login with Discord
										</Button>
									)}
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
									<a href='/templates'>Template</a> or a{' '}
									<a href='/hosting'>Hosting Option</a>
								</p>
							</div>
						)}
					</div>
				</div>
			</Container>
		</PageLayout>
	);
};
