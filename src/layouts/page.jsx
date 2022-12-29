import { Footer } from '../components/footer';
import { Nav } from '../components/nav';

export const PageLayout = ({ children, page, container }) => {
	return (
		<>
			<div
				style={{
					position: !container ? 'fixed' : null,
					width: '100%',
					zIndex: '100',
				}}
			>
				<div className={container ? 'container' : null}>
					<Nav containerized={container} />
				</div>
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
