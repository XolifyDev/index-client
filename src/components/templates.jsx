import templates from '../templates';

import { Card, Button } from 'react-bootstrap';

const ButtonHex = 'rgb(38, 40, 43)';

const TemplateCard = ({ template }) => (
	<Card body style={{ marginBottom: '2vh' }}>
		<Card.Img src={template.template} />

		<Card.Title style={{ marginTop: '1.5vh' }}>
			<h1 className='h3'>{template.name}</h1>
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
		style={{ marginTop: '5vh' }}
	>
		<h1 className='h2'>Website Templates</h1>

		<div className='row' style={{ marginTop: '2.5vh' }}>
			{templates.map((template, index) => (
				<div className='col-md-4' key={index}>
					<TemplateCard template={template} />
				</div>
			))}
		</div>

		<hr className='featurette-divider' />
	</div>
);
