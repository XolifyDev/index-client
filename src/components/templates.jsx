import templates from '../templates';

import { Card, Button } from 'react-bootstrap';

const ButtonHex = 'rgb(255, 98, 0)';

export const TemplateCard = ({ template }) => (
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
				src={template.template}
				style={{
					width: '100%',
					border: '2px solid',
					borderColor: 'rgb(255, 98, 0)',
				}}
			/>

			<Card.Title style={{ marginTop: '15px', marginBottom: '15px' }}>
				<h1 className='h4'>
					<span style={{ color: '#eee' }}>{template.name}</span>
				</h1>

				<p>Price: {template.price}</p>
			</Card.Title>

			<hr />

			<div>
				<Button
					style={{
						width: '100%',
						fontWeight: '700',
						fontSize: '20px',
						backgroundColor: 'rgb(63, 65, 66)',
						borderColor: 'rgb(63, 65, 66)',
					}}
					target='_blank'
					href={template.demo}
				>
					<i className='far fa-eye'></i> Demo Theme
				</Button>
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
					<i className='fas fa-shopping-cart'></i> Purchase Theme
				</Button>
			</div>
		</Card.Body>
	</Card>
);

export const Templates = () => (
	<div className='row'>
		{templates.map((template, index) => (
			<div
				className='col-md-4'
				key={index}
				style={{ paddingBottom: '3vh' }}
			>
				<TemplateCard template={template} />
			</div>
		))}
	</div>
);
