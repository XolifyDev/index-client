import { useState, useEffect, useContext } from 'react';
import { Container, Modal, Button, Card, Badge } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';
import { Templates } from '../components/templates';
import { silentUpdate } from '../utils';
import { CartItemsContext, UserAuthContext } from '../contexts';

import StoreTemplates from '../templates';
import { TrialBadge } from '../components/trialBadge';

const TemplateInfoModal = ({ show, setShow, template }) => {
	const { trials } = useContext(UserAuthContext);

	const [CartItems, setCartItems] = useContext(CartItemsContext);

	const [SelectedTemplate, setSelectedTemplate] = template;

	const handleClose = () => {
		setShow(false);
		setSelectedTemplate(null);
		silentUpdate('/templates');
	};

	return (
		show &&
		SelectedTemplate && (
			<Modal
				show={show}
				onHide={handleClose}
				size='xl'
				style={{
					marginTop: '5vh',
					color: 'black',
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>{SelectedTemplate.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='row' style={{ paddingBottom: '15px' }}>
						<div className='col-md-6'>
							<img
								src={SelectedTemplate.template}
								style={{ width: '100%' }}
							/>

							<div className='row' style={{ paddingTop: '15px' }}>
								<div className='col-md-4'>
									<img
										src={SelectedTemplate.template}
										style={{
											width: '100%',
											cursor: 'pointer',
										}}
									/>
								</div>
								<div className='col-md-4'>
									<img
										src={SelectedTemplate.template}
										style={{
											width: '100%',
											cursor: 'pointer',
										}}
									/>
								</div>
								<div className='col-md-4'>
									<img
										src={SelectedTemplate.template}
										style={{
											width: '100%',
											cursor: 'pointer',
										}}
									/>
								</div>
							</div>
						</div>
						<div
							className='col-md-6'
							style={{ position: 'relative' }}
						>
							<h1 className='h2'>{SelectedTemplate.name}</h1>

							<p style={{ fontWeight: '600', fontSize: '25px' }}>
								Features:
							</p>

							<div
								style={{
									position: 'absolute',
									bottom: '0',
									left: '12px',
									right: '12px',
								}}
							>
								<hr />

								{SelectedTemplate.demo && (
									<Button
										size='lg'
										target='_blank'
										variant='secondary'
										href={SelectedTemplate.demo}
										style={{
											width: '100%',
											fontWeight: '700',
											marginBottom: '15px',
										}}
									>
										<i className='fas fa-desktop'></i>{' '}
										Template Demo
									</Button>
								)}

								<Button
									size='lg'
									style={{
										width: '100%',
										fontWeight: '700',
										backgroundColor: 'rgb(255, 98, 0)',
										borderColor: 'rgb(255, 98, 0)',
									}}
								>
									<i className='far fa-eye'></i> Create New
									Store
								</Button>

								{/* {SelectedTemplate.trial &&
								!trials.includes(SelectedTemplate.id) ? (
									<Button
										size='lg'
										style={{
											marginTop: '10px',
											width: '100%',
											fontWeight: '700',
											backgroundColor: 'rgb(255, 98, 0)',
											borderColor: 'rgb(255, 98, 0)',
										}}
									>
										Start Free Trial
									</Button>
								) : CartItems.includes(SelectedTemplate.id) ? (
									<Button
										size='lg'
										onClick={() =>
											setCartItems((items) =>
												items.filter(
													(a) =>
														a !==
														SelectedTemplate.id
												)
											)
										}
										variant='danger'
										style={{
											marginTop: '10px',
											width: '100%',
											fontWeight: '700',
										}}
									>
										<i className='fas fa-shopping-cart'></i>{' '}
										Remove from Cart
									</Button>
								) : (
									<Button
										size='lg'
										onClick={() =>
											setCartItems((items) => [
												...items,
												SelectedTemplate.id,
											])
										}
										style={{
											marginTop: '10px',
											width: '100%',
											fontWeight: '700',
											backgroundColor: 'rgb(255, 98, 0)',
											borderColor: 'rgb(255, 98, 0)',
										}}
									>
										<i className='fas fa-shopping-cart'></i>{' '}
										Add to Cart
									</Button>
								)} */}
							</div>
						</div>
					</div>

					{/* <hr />

					<div>
						<p
							style={{
								margin: '0',
								padding: '0',
								fontWeight: '600',
							}}
						>
							Upgrades
						</p>

						<div className='row' style={{ paddingTop: '15px' }}>
							<div className='col-md-4'>
								<Card body>
									<Card.Title>Premium Hosting</Card.Title>
								</Card>
							</div>
							<div className='col-md-4'>
								<Card body>
									<Card.Title>Discord Integration</Card.Title>
								</Card>
							</div>
						</div>
					</div> */}
				</Modal.Body>
			</Modal>
		)
	);
};

export const TemplatesPage = () => {
	const [ShowInfoModal, setShowInfoModal] = useState(false);

	const [SelectedTemplate, setSelectedTemplate] = useState(null);

	const [CartItems, setCartItems] = useContext(CartItemsContext);

	const viewTemplate = (template) => {
		silentUpdate('/templates?template=' + template.id);
		setSelectedTemplate(template);
		setShowInfoModal(true);
	};

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		const templateId = params.get('template');

		if (templateId) {
			StoreTemplates.forEach((template) => {
				if (template.id == templateId) viewTemplate(template);
			});
		}
	}, []);

	return (
		<PageLayout container>
			<TemplateInfoModal
				show={ShowInfoModal}
				setShow={setShowInfoModal}
				template={[SelectedTemplate, setSelectedTemplate]}
			/>

			<div style={{ minHeight: '75vh' }}>
				<Container style={{ paddingTop: '80px' }}>
					<div className='container'>
						<TrialBadge />

						<h1 className='h3' style={{ paddingBottom: '20px' }}>
							Templates
						</h1>

						<hr />

						<div>
							<Templates viewTemplate={viewTemplate} />
						</div>
					</div>
				</Container>
			</div>
		</PageLayout>
	);
};
