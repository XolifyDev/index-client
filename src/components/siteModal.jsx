import { useState, useEffect } from 'react';
import { Modal, Button, InputGroup, Form, Card, Nav } from 'react-bootstrap';
import { UserTemplatesModal } from './templatesModal';
import { createSite } from '../utils';

export const SiteModal = ({ show, setShow, creatingSite, site }) => {
	const [ShowTemplatesModal, setShowTemplatesModal] = useState(false);

	const [SelectedTheme, setSelectedTheme] = useState(null);

	const [Domain, setDomain] = useState('');

	const [Page, setPage] = useState('site');

	const [Data, setData] = useState(null);

	const create = () =>
		createSite({
			themeId: 'store',
			hostingId: '12312',
			domain: `${Domain}.fivem.design`,
		}).then(({ data }) => {
			if (data.error) alert(data.error);

			handleClose();
			// resetData();
		});

	useEffect(() => {
		if (creatingSite || !site) return;

		setData(site);
	}, [creatingSite, site]);

	const handleClose = () => setShow(false);

	const chooseTheme = () => {
		setShow(false);
		setShowTemplatesModal(true);
	};

	return (
		<>
			<UserTemplatesModal
				theme={[SelectedTheme, setSelectedTheme]}
				show={ShowTemplatesModal}
				setShow={setShowTemplatesModal}
				handleClose={() => {
					setShow(true);
					setShowTemplatesModal(false);
				}}
			/>

			{show && (!creatingSite ? (Data ? true : false) : true) && (
				<Modal
					size={!creatingSite ? 'xl' : 'lg'}
					show={show}
					onHide={handleClose}
					style={
						creatingSite
							? { marginTop: '10vh', color: 'black' }
							: { marginTop: '5vh', color: 'black' }
					}
				>
					<Modal.Header closeButton>
						<Modal.Title>
							{creatingSite ? 'Create New Site' : 'Edit Site'}
						</Modal.Title>
					</Modal.Header>
					{creatingSite ? (
						<Modal.Body style={{ textAlign: 'center' }}>
							<div
								style={{
									width: '80%',
									margin: 'auto',
									padding: '15px',
								}}
							>
								<p
									style={{
										fontSize: '22px',
										paddingBottom: '15px',
									}}
								>
									To begin creating a site, please register
									the domain.
								</p>

								<InputGroup
									className='mb-2'
									style={{
										width: '100%',
										marginTop: '15px',
									}}
								>
									<InputGroup.Text>https://</InputGroup.Text>
									<Form.Control
										id='inlineFormInputGroup'
										placeholder='greater-rp'
										value={creatingSite ? Domain : Data.src}
										onChange={(e) =>
											setDomain(e.target.value)
										}
									/>
									<InputGroup.Text>
										fivem.design
									</InputGroup.Text>
								</InputGroup>

								<p
									style={{
										paddingTop: '20px',
										fontSize: '22px',
										fontWeight: '600',
										fontStyle: 'italic',
										color: 'green',
									}}
								>
									<i className='fas fa-check'></i> Domain
									Available
								</p>
							</div>
						</Modal.Body>
					) : (
						<Modal.Body style={{ minHeight: '45vh' }}>
							<Nav fill variant='tabs'>
								<Nav.Item onClick={() => setPage('site')}>
									<Nav.Link active={Page == 'site'}>
										Site Details
									</Nav.Link>
								</Nav.Item>
								<Nav.Item onClick={() => setPage('hosting')}>
									<Nav.Link active={Page == 'hosting'}>
										Hosting Details
									</Nav.Link>
								</Nav.Item>
							</Nav>

							{Page == 'site' ? (
								<div style={{ paddingTop: '15px' }}>
									<Card
										body
										style={{
											marginBottom: '20px',
										}}
									>
										<div>
											<Card.Title>
												Site Details
											</Card.Title>

											<div>
												<div
													className='row'
													style={{
														marginTop: '20px',
													}}
												>
													<div className='col-md-6'>
														<Form.Group>
															<Form.Label>
																Site Name
															</Form.Label>

															<Form.Control
																type='text'
																style={{
																	marginTop:
																		'5px',
																}}
															/>
														</Form.Group>
													</div>
													<div className='col-md-6'>
														<Form.Group>
															<Form.Label>
																Domain
															</Form.Label>

															<InputGroup
																className='mb-2'
																style={{
																	width: '100%',
																	marginTop:
																		'5px',
																}}
															>
																<InputGroup.Text>
																	https://
																</InputGroup.Text>
																<Form.Control
																	id='inlineFormInputGroup'
																	placeholder='greater-rp'
																	value={
																		creatingSite
																			? Domain
																			: Data.src
																	}
																	onChange={(
																		e
																	) =>
																		setDomain(
																			e
																				.target
																				.value
																		)
																	}
																/>
																<InputGroup.Text>
																	fivem.design
																</InputGroup.Text>
															</InputGroup>
														</Form.Group>
													</div>

													<div
														className='col-md-6'
														style={{
															paddingTop: '5px',
															paddingBottom:
																'10px',
														}}
													>
														<Form.Group>
															<Form.Label>
																Site Template
															</Form.Label>

															<div
																style={{
																	marginTop:
																		'5px',
																}}
															>
																<Button
																	variant='secondary'
																	onClick={
																		chooseTheme
																	}
																	style={{
																		width: '100%',
																		fontWeight:
																			'700',
																	}}
																>
																	Select
																	Template
																</Button>
															</div>
														</Form.Group>
													</div>

													{/* <div className='col-md-10'>
												<Form.Group
													style={{
														width: '100%',
													}}
												>
													<InputGroup
														className='mb-2'
														style={{
															width: '100%',
														}}
													>
														<InputGroup.Text>
															https://
														</InputGroup.Text>
														<Form.Control
															id='inlineFormInputGroup'
															placeholder='greater-rp'
															value={
																creatingSite
																	? Domain
																	: Data.src
															}
															onChange={(e) =>
																setDomain(
																	e.target
																		.value
																)
															}
														/>
														<InputGroup.Text>
															fivem.design
														</InputGroup.Text>
													</InputGroup>
												</Form.Group>
											</div>
											<div className='col-md-2'>
												<Button
													style={{
														width: '100%',
														fontWeight: '700',
														backgroundColor:
															'rgb(63, 65, 66)',
														borderColor:
															'rgb(63, 65, 66)',
													}}
												>
													Set Domain
												</Button>
											</div> */}
												</div>

												{/* <div
											className='row'
											style={{ marginTop: '20px' }}
										>
											<div className='col-md-10'>
												<Form.Group
													style={{
														width: '100%',
													}}
												>
													<InputGroup
														className='mb-2'
														style={{
															width: '100%',
														}}
													>
														<InputGroup.Text>
															https://
														</InputGroup.Text>
														<Form.Control
															id='inlineFormInputGroup'
															placeholder='greater-rp'
															value={
																creatingSite
																	? Domain
																	: Data.src
															}
															onChange={(e) =>
																setDomain(
																	e.target
																		.value
																)
															}
														/>
													</InputGroup>
												</Form.Group>
											</div>
											<div className='col-md-2'>
												<Button
													style={{
														width: '100%',
														fontWeight: '700',
														backgroundColor:
															'rgb(63, 65, 66)',
														borderColor:
															'rgb(63, 65, 66)',
													}}
												>
													Set Domain
												</Button>
											</div>
										</div> */}
											</div>
										</div>
									</Card>
								</div>
							) : Page == 'hosting' ? (
								<div style={{ paddingTop: '15px' }}></div>
							) : null}
						</Modal.Body>
					)}
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={handleClose}
							style={{ fontWeight: '700' }}
						>
							Close
						</Button>
						<Button
							onClick={create}
							style={{
								fontWeight: '700',
								backgroundColor: 'rgb(255, 98, 0)',
								borderColor: 'rgb(255, 98, 0)',
							}}
						>
							{creatingSite ? 'Create Site' : 'Edit Site'}
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</>
	);
};

export const CreateSiteModal = (params) => (
	<SiteModal {...params} creatingSite />
);
