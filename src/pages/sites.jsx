import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';
import { SiteCard } from '../components/siteCard';
import { CreateSiteModal } from '../components/siteModal';
import { fetchSites } from '../utils';

export const UserSitesPage = () => {
	const [FetchingSites, setFetchingSites] = useState(true);

	const [UserSites, setUserSites] = useState([]);

	const [ShowCreateModal, setShowCreateModal] = useState(false);

	const resetData = () => {
		setFetchingSites(true);

		fetchSites().then(({ data }) => {
			setUserSites(data.sites);

			setFetchingSites(false);

			let needsRefresh = false;

			data.sites.forEach((site) => {
				if (!site.active) needsRefresh = true;
			});

			if (needsRefresh) setTimeout(resetData, 4500);
		});
	};

	useEffect(resetData, []);

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

					<div>
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
