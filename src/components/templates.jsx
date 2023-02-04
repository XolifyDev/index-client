import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartItemsContext, UserAuthContext } from '../contexts';

import templates from '../templates';

export const TemplateCard = ({ template, viewTemplate }) => {
	const [CartItems, setCartItems] = useContext(CartItemsContext);

	const { trials } = useContext(UserAuthContext);

	return (
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
					backgroundColor: 'rgb(33, 37, 41)',
					color: '#eee',
				}}
			>
				<Card.Img
					src={templates[0].template}
					onClick={viewTemplate}
					style={{
						width: '100%',
						border: '2px solid',
						borderColor: 'rgb(255, 98, 0)',
						cursor: 'pointer',
					}}
				/>

				<Card.Title style={{ marginTop: '15px', marginBottom: '15px' }}>
					<h1 className='h4'>
						<span style={{ color: '#eee' }}>{template.name}</span>
					</h1>

					{/* <p>Price: {template.price}</p> */}
				</Card.Title>

				<hr />

				<div>
					<Button
						onClick={viewTemplate}
						style={{
							width: '100%',
							fontWeight: '700',
							fontSize: '20px',
							backgroundColor: 'rgb(63, 65, 66)',
							borderColor: 'rgb(63, 65, 66)',
						}}
					>
						<i className='far fa-eye'></i> View More
					</Button>

					{/* {template.trial && !trials.includes(template.id) ? (
						<Button
							style={{
								width: '100%',
								fontWeight: '700',
								fontSize: '20px',
								marginTop: '15px',
								backgroundColor: ButtonHex,
								borderColor: ButtonHex,
							}}
						>
							Start Free Trial
						</Button>
					) : CartItems.includes(template.id) ? (
						<Button
							onClick={() =>
								setCartItems((items) =>
									items.filter((a) => a !== template.id)
								)
							}
							variant='danger'
							style={{
								width: '100%',
								fontWeight: '700',
								fontSize: '20px',
								marginTop: '15px',
							}}
						>
							<i className='fas fa-shopping-cart'></i> Remove from
							Cart
						</Button>
					) : (
						<Button
							onClick={() =>
								setCartItems((items) => [...items, template.id])
							}
							style={{
								width: '100%',
								fontWeight: '700',
								fontSize: '20px',
								marginTop: '15px',
								backgroundColor: ButtonHex,
								borderColor: ButtonHex,
							}}
						>
							<i className='fas fa-shopping-cart'></i> Add to Cart
						</Button>
					)} */}
				</div>
			</Card.Body>
		</Card>
	);
};

export const Templates = ({ viewTemplate }) => (
	<div className='row'>
		{templates.map((template, index) => (
			<div
				className='col-md-4'
				key={index}
				style={{ paddingBottom: '3vh' }}
			>
				<TemplateCard
					template={template}
					viewTemplate={() => viewTemplate(template)}
				/>
			</div>
		))}
	</div>
);
