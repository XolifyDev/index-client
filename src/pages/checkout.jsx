import { PageLayout } from '../layouts/page';
import { Container } from 'react-bootstrap';

export const CheckoutPage = () => {
	return (
		<PageLayout container>
			<Container
				style={{
					paddingTop: '65px',
					textAlign: 'center',
					height: '80vh',
				}}
			>
				<div style={{ paddingTop: '145px' }}>
					<h1>Thank you for your purchase!</h1>
				</div>
			</Container>
		</PageLayout>
	);
};
