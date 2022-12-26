import { Container, Card } from 'react-bootstrap';
import { PageLayout } from '../layouts/page';
import { Templates } from '../components/templates';

export const HostingPage = () => {
	return (
		<PageLayout container>
			<Container style={{ paddingTop: '120px' }}>
				<div className='container' style={{ textAlign: 'center' }}>
					<h1 className='h3' style={{ paddingBottom: '10px' }}>
						Hosting Plans
					</h1>

					<div className='row' style={{ paddingBottom: '15px' }}>
						<div className='col-md-2'></div>
						<div className='col-md-8'>
							<hr />
						</div>
					</div>

					<div
						style={{
							height: '55vh',
							overflowY: 'auto',
							overflowX: 'hidden',
						}}
					>
						<div className='row'>
							<div className='col-md-2'></div>
							<div className='col-md-4'>
								<Card
									bg='secondary'
									text='light'
									style={{
										height: '30vh',
										color: 'black',
										borderColor: 'rgb(33, 37, 41)',
									}}
								>
									<Card.Body
										style={{
											borderRadius: '1.5px',
											backgroundColor: 'rgb(33, 37, 41)',
										}}
									>
										<Card.Title>test</Card.Title>
									</Card.Body>
								</Card>
							</div>
							<div className='col-md-4'>
								<Card
									bg='secondary'
									text='light'
									style={{
										height: '30vh',
										color: 'black',
										borderColor: 'rgb(33, 37, 41)',
									}}
								>
									<Card.Body
										style={{
											borderRadius: '1.5px',
											backgroundColor: 'rgb(33, 37, 41)',
										}}
									>
										<Card.Title>test</Card.Title>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</PageLayout>
	);
};
