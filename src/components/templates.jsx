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
			<Card.Img src={template.template} style={{ width: '100%' }} />

			<Card.Title style={{ marginTop: '20px', marginBottom: '10px' }}>
				<h1 className='h4'>
					<span style={{ color: '#eee' }}>{template.name}</span>
				</h1>

				<p>$10.00</p>
			</Card.Title>

			<hr />

			<div>
				<Button
					style={{
						width: '100%',
						fontWeight: '700',
						fontSize: '20px',
						marginBottom: '15px',
						backgroundColor: ButtonHex,
						borderColor: ButtonHex,
					}}
				>
					Setup Theme
				</Button>
				<Button
					style={{
						width: '100%',
						fontWeight: '700',
						fontSize: '20px',
						backgroundColor: ButtonHex,
						borderColor: ButtonHex,
					}}
					target='_blank'
					href={template.demo}
				>
					Demo Theme
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
