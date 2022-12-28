import { useState, useEffect } from 'react';
import { PageLayout } from '../layouts/page';
import { SiteCard } from '../components/siteCard';
import { createSite, fetchSites } from '../utils';
import {
	Container,
	Modal,
	Button,
	InputGroup,
	Form,
	Card,
} from 'react-bootstrap';

const CreateSiteModal = ({ show, setShow, resetData }) => {
	const handleClose = () => setShow(false);

	const [Domain, setDomain] = useState('');

	const create = () =>
		createSite({
			themeId: 'store',
			hostingId: '12312',
			domain: `${Domain}.fivem.design`,
		}).then(({ data }) => {
			if (data.error) alert(data.error);

			handleClose();
			resetData();
		});

	return (
		show && (
			<Modal
				show={show}
				onHide={handleClose}
				size='xl'
				style={{ marginTop: '5vh', color: 'black' }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Create New Site</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ minHeight: '45vh' }}>
					<Form>
						<div className='row'>
							<div className='col-md-6'>
								<Form.Group>
									<Form.Label style={{ fontWeight: '700' }}>
										Domain
									</Form.Label>

									<InputGroup className='mb-2'>
										<InputGroup.Text>
											https://
										</InputGroup.Text>
										<Form.Control
											id='inlineFormInputGroup'
											placeholder='greater-rp'
											value={Domain}
											onChange={(e) =>
												setDomain(e.target.value)
											}
										/>
										<InputGroup.Text>
											fivem.design
										</InputGroup.Text>
									</InputGroup>
								</Form.Group>
							</div>
							<div className='col-md-6'>
								<Form.Group>
									<Form.Label style={{ fontWeight: '700' }}>
										Theme
									</Form.Label>

									<Card
										body
										style={{
											backgroundColor: 'rgb(33, 37, 41)',
										}}
									>
										<Card.Img
											src='https://i.imgur.com/iAuXP2x.png'
											style={{ width: '100%' }}
										/>

										<Card.Title
											style={{
												paddingTop: '15px',
												color: '#eee',
											}}
										>
											Store Theme
										</Card.Title>
									</Card>
								</Form.Group>
							</div>
						</div>
					</Form>
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

export const UserSitesPage = () => {
	const [FetchingSites, setFetchingSites] = useState(true);

	const [UserSites, setUserSites] = useState([]);

	const [ShowCreateModal, setShowCreateModal] = useState(false);

	const resetData = () => {
		setFetchingSites(true);

		fetchSites().then(({ data }) => {
			setUserSites(data.sites);

			setFetchingSites(false);
		});
	};

	useEffect(() => {
		resetData();
	}, []);

	return (
		<PageLayout container>
			<CreateSiteModal
				show={ShowCreateModal}
				setShow={setShowCreateModal}
				resetData={resetData}
			/>

			<Container style={{ paddingTop: '80px' }}>
				<div className='container'>
					<div
						style={{
							paddingBottom: '20px',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<h1 className='h3'>User Sites</h1>

						<div style={{ marginLeft: 'auto' }}>
							<Button
								size='sm'
								onClick={resetData}
								disabled={FetchingSites}
								style={{
									fontWeight: '700',
									backgroundColor: 'rgb(63, 65, 66)',
									borderColor: 'rgb(63, 65, 66)',
									marginRight: '10px',
								}}
							>
								<i className='fas fa-sync-alt'></i> Refresh data
							</Button>
							<Button
								size='sm'
								disabled={FetchingSites}
								style={{
									fontWeight: '700',
									backgroundColor: 'rgb(255, 98, 0)',
									borderColor: 'rgb(255, 98, 0)',
								}}
								onClick={() => {
									setShowCreateModal(true);
								}}
							>
								<i className='fas fa-plus'></i> Create New Site
							</Button>
						</div>
					</div>

					<hr />

					<div
						style={{
							maxHeight: '65vh',
							minHeight: '55vh',
							overflowY: 'auto',
							overflowX: 'hidden',
						}}
					>
						{!FetchingSites ? (
							<div
								className={
									UserSites.length !== 0
										? 'row'
										: 'text-center'
								}
							>
								{UserSites.length !== 0 ? (
									UserSites.map((site) => {
										return (
											<div
												className='col-md-4'
												key={site._id}
											>
												<SiteCard site={site} />
											</div>
										);
									})
								) : (
									<p
										style={{
											fontSize: '35px',
											fontWeight: '700',
											fontStyle: 'italic',
											padding: '85px',
										}}
									>
										No User Sites Found!{' '}
										<a
											href='#'
											onClick={() =>
												setShowCreateModal(true)
											}
										>
											Create
										</a>
									</p>
								)}
							</div>
						) : (
							<div className='row'>
								<div className='col-md-4'>
									<SiteCard loading />
								</div>
								<div className='col-md-4'>
									<SiteCard loading />
								</div>
								<div className='col-md-4'>
									<SiteCard loading />
								</div>
								<div className='col-md-4'>
									<SiteCard loading />
								</div>
								<div className='col-md-4'>
									<SiteCard loading />
								</div>
							</div>
						)}
					</div>
				</div>
			</Container>
		</PageLayout>
	);
};
