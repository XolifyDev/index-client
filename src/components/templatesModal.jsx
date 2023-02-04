import { Modal, Card, Button } from 'react-bootstrap';
import { silentUpdate } from '../utils';

import Templates from '../templates';

export const UserTemplatesModal = ({ theme, show, setShow }) => {
	const [SelectedTheme, setSelectedTheme] = theme;

	const handleClose = () => {
		setShow(false);
		silentUpdate('/sites');
	};

	return (
		<Modal
			size='xl'
			show={show}
			onHide={handleClose}
			style={{ marginTop: '5vh', color: 'black' }}
		>
			<Modal.Header closeButton>
				<Modal.Title>Select Site Template</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ height: '50vh' }}>
				<div className='row'>
					{Templates.map((template) => (
						<div className='col-md-4'>
							<a
								href='#'
								onClick={(e) => {
									e.preventDefault();

									setSelectedTheme(template.id);

									silentUpdate(
										'/sites?creatingSite=true&template=' +
											template.id
									);
								}}
								style={{
									textDecoration: 'none',
									color: '#eee',
								}}
							>
								<Card body style={{ color: 'black' }}>
									<Card.Img
										src={template.template}
										style={{ cursor: 'pointer' }}
									/>

									<div style={{ marginTop: '15px' }}>
										<Card.Title>{template.name}</Card.Title>

										<hr />

										<Button
											style={{
												width: '100%',
												fontWeight: '700',
												backgroundColor:
													'rgb(255, 98, 0)',
												borderColor: 'rgb(255, 98, 0)',
											}}
										>
											Select Template
										</Button>
									</div>
								</Card>
							</a>
						</div>
					))}
				</div>
			</Modal.Body>
		</Modal>
	);
};
