import { PageLayout } from '../layouts/page';
import { Container, Button } from 'react-bootstrap';

export const UserCartPage = () => {
	return (
		<PageLayout container>
			<Container style={{ paddingTop: '80px' }}>
				<div className='container'>
					<div
						style={{
							paddingBottom: '20px',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<h1 className='h3'>
							Cart Items{' '}
							<span style={{ fontStyle: 'italic' }}>
								(0 Items)
							</span>
						</h1>

						{/* <div style={{ marginLeft: 'auto' }}>
							<Button
								size='sm'
								// onClick={resetData}
								// disabled={FetchingSites}
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
								// disabled={FetchingSites}
								style={{
									fontWeight: '700',
									backgroundColor: 'rgb(255, 98, 0)',
									borderColor: 'rgb(255, 98, 0)',
								}}
								// onClick={() => {
								// 	setShowCreateModal(true);
								// }}
							>
								<i className='fas fa-plus'></i> Create New Site
							</Button>
						</div> */}
					</div>

					<hr />
				</div>
			</Container>
		</PageLayout>
	);
};
