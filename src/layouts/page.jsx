import { Footer } from '../components/footer';
import { Nav } from '../components/nav';

export const PageLayout = ({ children }) => {
	return (
		<>
			<Nav />

			<main style={{ marginTop: '7vh' }}>
				{children}

				<Footer />
			</main>
		</>
	);
};
