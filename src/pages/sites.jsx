import { Container } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';
import { SiteCard } from '../components/siteCard';

export const UserSitesPage = () => {
	return (
		<PageLayout container>
			<Container style={{ paddingTop: '80px' }}>
				<div className='container'>
					<h1 className='h3' style={{ paddingBottom: '20px' }}>
						User Sites
					</h1>

					<hr />

					<div
						style={{
							maxHeight: '65vh',
							overflowY: 'auto',
							overflowX: 'hidden',
						}}
					>
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
					</div>
				</div>
			</Container>
		</PageLayout>
	);
};
