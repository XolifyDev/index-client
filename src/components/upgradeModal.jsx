import { useState, useEffect, useContext } from 'react';
import { Modal, Button, Card, Spinner } from 'react-bootstrap';
import { UserAuthContext } from '../contexts';
import { fetchSites } from '../utils';

export const UpgradeModal = ({ show, setShow, trialBage }) => {
	const { trial } = useContext(UserAuthContext);

	const [FetchingSites, setFetchingSites] = useState(true);

	const [UserSites, setUserSites] = useState([]);

	const [ShowCreateModal, setShowCreateModal] = useState(false);

	const [Template, setTemplate] = useState(null);

	const handleClose = () => setShow(false);

	const resetData = () => {
		setFetchingSites(true);

		fetchSites().then(({ data }) => {
			if (data.error) return alert(data.error);

			setUserSites(data.sites);

			setFetchingSites(false);
		});
	};

	const upgradeSite = () => {};

	useEffect(() => {
		if (!show) return;

		resetData();
	}, [show]);

	return (
		<Modal
			show={show}
			onHide={handleClose}
			size='xl'
			style={{
				color: 'black',
				marginTop: '5vh',
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Upgrade Site Hosting</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ maxHeight: '65vh', overflow: 'auto' }}>
				{trial && trialBage ? (
					<div className='text-center' style={{ padding: '45px' }}>
						<h1 className='h4' style={{ fontSize: '65px' }}>
							<i class='fas fa-exclamation-triangle'></i>
						</h1>

						<p
							style={{
								padding: '0',
								margin: '0',
								paddingTop: '30px',
								fontWeight: '700',
								fontSize: '25px',
								fontStyle: 'italic',
							}}
						>
							You have already activated the free trial!
						</p>
					</div>
				) : !FetchingSites ? (
					<div className='row'>
						{UserSites.map((site) => {
							return (
								<div
									className='col-md-4'
									style={{ paddingBottom: '20px' }}
								>
									<Card body>
										<Card.Img
											src='http://localhost:3000/static/media/preview_landing.00ff06d8934c0bd7d234.png'
											style={{ cursor: 'pointer' }}
										/>

										<Card.Title
											style={{ paddingTop: '15px' }}
										>
											{site.src}
										</Card.Title>

										<hr />

										<Button
											style={{
												fontWeight: '700',
												backgroundColor:
													'rgb(63, 65, 66)',
												borderColor: 'rgb(63, 65, 66)',
												width: '100%',
											}}
										>
											Upgrade Site
										</Button>
									</Card>
								</div>
							);
						})}

						<div className='col-md-4'>
							<a
								href='/sites?creatingSite=true'
								style={{
									textDecoration: 'none',
									color: 'black',
								}}
							>
								<Card body style={{ cursor: 'pointer' }}>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											padding: '45px',
										}}
									>
										<div className='text-center'>
											<Card.Title
												style={{ fontSize: '65px' }}
											>
												<i className='fas fa-plus'></i>
											</Card.Title>

											<p
												style={{
													padding: '0',
													margin: '0',
													marginTop: '25px',
													fontWeight: '700',
													fontStyle: 'italic',
													fontSize: '20px',
												}}
											>
												Create New Site
											</p>
										</div>
									</div>
								</Card>
							</a>
						</div>
					</div>
				) : (
					<div className='text-center' style={{ padding: '35px' }}>
						<Spinner
							animation='border'
							role='status'
							style={{
								height: '145px',
								width: '145px',
								fontSize: '35px',
							}}
						>
							<span className='visually-hidden'>Loading...</span>
						</Spinner>

						<p
							style={{
								margin: '0',
								padding: '0',
								paddingTop: '35px',
								fontSize: '25px',
								fontWeight: '700',
								fontStyle: 'italic',
							}}
						>
							Fetching User Sites...
						</p>
					</div>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='secondary'
					onClick={handleClose}
					style={{ fontWeight: '700' }}
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
