import { Footer } from '../components/footer';
import { Nav } from '../components/nav';

export const PageLayout = ({ children, page }) => {
	return (
		<>
			<div style={{ position: 'fixed', width: '100%' }}>
				<Nav />
			</div>

			<div>{children}</div>

			<div
				style={{
					paddingTop: page ? '20px' : '60px',
					paddingBottom: '30px',
				}}
			>
				<Footer />
			</div>
		</>
	);
};
