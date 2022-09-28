import templates from '../templates';

import { Card } from 'react-bootstrap';

const TemplateCard = ({ template }) => (
	<Card body style={{ marginBottom: '2vh' }}>
		<Card.Title>{template.name}</Card.Title>
	</Card>
);

export const Templates = () => (
	<div
		id='templates'
		className='container marketing'
		style={{ marginTop: '5vh' }}
	>
		<div className='row'>
			{templates.map((template, index) => (
				<div className='col-md-4' key={index}>
					<TemplateCard template={template} />
				</div>
			))}
		</div>

		<hr className='featurette-divider' />
	</div>
);
