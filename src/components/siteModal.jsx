import { useState, useEffect } from 'react';
import { Modal, Button, InputGroup, Form, Card, Nav } from 'react-bootstrap';
import { createSite } from '../utils';

export const SiteModal = ({ show, setShow, creatingSite, site }) => {
	const handleClose = () => setShow(false);

	const [Domain, setDomain] = useState('');

	const [Page, setPage] = useState('theme');

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

	return (
		show &&
		(!creatingSite ? (Data ? true : false) : true) && (
			<Modal
				show={show}
				onHide={handleClose}
				size='xl'
				style={{ marginTop: '5vh', color: 'black' }}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						{creatingSite ? 'Create New Site' : 'Edit Site'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ minHeight: '45vh' }}>
					<Nav fill variant='tabs'>
						<Nav.Item onClick={() => setPage('theme')}>
							<Nav.Link active={Page == 'theme'}>
								Theme Settings
							</Nav.Link>
						</Nav.Item>
						<Nav.Item onClick={() => setPage('domain')}>
							<Nav.Link active={Page == 'domain'}>
								Domain Settings
							</Nav.Link>
						</Nav.Item>
					</Nav>

					{Page == 'domain' ? (
						<div style={{ paddingTop: '15px' }}>
							<Card
								body
								style={{
									marginBottom: '20px',
								}}
							>
								<div>
									<Card.Title>Subdomain</Card.Title>

									<div
										className='row'
										style={{ marginTop: '20px' }}
									>
										<div className='col-md-10'>
											<Form.Group
												style={{ width: '100%' }}
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
																e.target.value
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
										</div>
									</div>
								</div>
							</Card>

							{/* <Card body>
								<div>
									<Card.Title>Custom Domain</Card.Title>

									<div
										className='row'
										style={{ marginTop: '20px' }}
									>
										<div className='col-md-8'>
											<Form.Group>
												<InputGroup className='mb-2'>
													<InputGroup.Text>
														https://
													</InputGroup.Text>
													<Form.Control
														id='inlineFormInputGroup'
														placeholder='greater-rp'
														value={Domain}
														onChange={(e) =>
															setDomain(
																e.target.value
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
														'rgb(255, 98, 0)',
													borderColor:
														'rgb(255, 98, 0)',
												}}
											>
												Set Domain
											</Button>
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
												Clear Domain
											</Button>
										</div>
									</div>
								</div>
							</Card> */}
						</div>
					) : Page == 'theme' ? (
						<div style={{ paddingTop: '15px' }}>
							<Card
								body
								style={{
									marginBottom: '20px',
								}}
							>
								<div>
									<Card.Title>Selected Theme</Card.Title>

									<div
										className='row'
										style={{ marginTop: '20px' }}
									>
										<div className='col-md-10'>
											<Form.Group
												style={{ width: '100%' }}
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
														value={Domain}
														onChange={(e) =>
															setDomain(
																e.target.value
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
										</div>
									</div>
								</div>
							</Card>

							{/* <Card body>
							<div>
								<Card.Title>Custom Domain</Card.Title>

								<div
									className='row'
									style={{ marginTop: '20px' }}
								>
									<div className='col-md-8'>
										<Form.Group>
											<InputGroup className='mb-2'>
												<InputGroup.Text>
													https://
												</InputGroup.Text>
												<Form.Control
													id='inlineFormInputGroup'
													placeholder='greater-rp'
													value={Domain}
													onChange={(e) =>
														setDomain(
															e.target.value
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
													'rgb(255, 98, 0)',
												borderColor:
													'rgb(255, 98, 0)',
											}}
										>
											Set Domain
										</Button>
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
											Clear Domain
										</Button>
									</div>
								</div>
							</div>
						</Card> */}
						</div>
					) : null}
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
						onClick={create}
						style={{
							fontWeight: '700',
							backgroundColor: 'rgb(255, 98, 0)',
							borderColor: 'rgb(255, 98, 0)',
						}}
					>
						Create Site
					</Button>
				</Modal.Footer>
			</Modal>
		)
	);
};

export const CreateSiteModal = (params) => (
	<SiteModal {...params} creatingSite />
);
