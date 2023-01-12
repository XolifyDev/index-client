import { Container } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';
import { Templates } from '../components/templates';

export const TemplatesPage = () => {
	return (
		<PageLayout container>
			<div style={{ minHeight: '80vh' }}>
				<Container style={{ paddingTop: '80px' }}>
					<div className='container'>
						<h1 className='h3' style={{ paddingBottom: '20px' }}>
							Templates
						</h1>

						<hr />

						<div
							style={{
								height: '65vh',
								overflowY: 'auto',
								overflowX: 'hidden',
							}}
						>
							<Templates />
						</div>
					</div>
				</Container>
			</div>
		</PageLayout>
	);
};
