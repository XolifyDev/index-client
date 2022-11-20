import templates from '../templates';

import { Card, Button } from 'react-bootstrap';

const ButtonHex = 'rgb(38, 40, 43)';

export const TemplateCard = ({ template }) => (
	<Card body style={{ paddingBottom: '2vh', height: '100%' }}>
		<Card.Img src={template.template} style={{ width: '100%' }} />

		<Card.Title style={{ marginTop: '1.5vh' }}>
			<h1 className='h3'>
				<span style={{ color: 'black' }}>{template.name}</span>
			</h1>
		</Card.Title>

		<div>
			<Button
				style={{
					fontWeight: '700',
					backgroundColor: ButtonHex,
					borderColor: ButtonHex,
				}}
			>
				Setup Theme
			</Button>
		</div>
	</Card>
);

export const Templates = () => (
	<div
		id='templates'
		className='container marketing'
		style={{ paddingTop: '8vh' }}
	>
		<h1 className='h2'>Website Templates</h1>

		<div className='row' style={{ marginTop: '4vh' }}>
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

		<hr className='featurette-divider' />
	</div>
);
