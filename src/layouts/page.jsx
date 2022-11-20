import { Footer } from '../components/footer';
import { Nav } from '../components/nav';

export const PageLayout = ({ children, page }) => {
	return (
		<>
			<header>
				<Nav />
			</header>

			<div style={{ marginTop: '80px' }}>{children}</div>

			<div
				style={{
					paddingTop: page ? '20px' : '220px',
					paddingBottom: '30px',
				}}
			>
				<Footer />
			</div>
		</>
	);
};
