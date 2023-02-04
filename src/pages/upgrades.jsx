import { Container } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';
import { Card } from 'react-bootstrap';

export const UpgradesPage = () => {
	return (
		<PageLayout container>
			<div style={{ minHeight: '80vh' }}>
				<Container style={{ paddingTop: '80px' }}>
					<div className='row'>
						<div className='col-md-4'>
							<Card body>
								<Card.Title>Custom Bot</Card.Title>
							</Card>
						</div>
					</div>
				</Container>
			</div>
		</PageLayout>
	);
};
