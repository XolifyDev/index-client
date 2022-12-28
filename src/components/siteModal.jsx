import { Modal, Button } from 'react-bootstrap';

export const SiteModal = ({ show, setShow }) => {
	const handleClose = () => setShow(false);

	return (
		show && (
			<Modal
				show={show}
				onHide={handleClose}
				size='lg'
				style={{ color: 'black', marginTop: '5vh' }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Modify Site Settings</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: '45vh' }}>
					Woohoo, you're reading this text in a modal!
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleClose}
						style={{ fontWeight: '700' }}
					>
						Close
					</Button>
					<Button
						variant='primary'
						onClick={handleClose}
						style={{
							fontWeight: '700',
							backgroundColor: 'rgb(255, 98, 0)',
							borderColor: 'rgb(255, 98, 0)',
						}}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		)
	);
};
