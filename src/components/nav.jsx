import { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { UserAuthContext } from '../contexts';

export const Nav = () => {
	const { login, logout, user } = useContext(UserAuthContext);

	const [Scrolled, setScrolled] = useState(false);

	useEffect(() => {
		// window.onscroll = () => setScrolled(window.pageYOffset !== 0);
	}, []);

	return (
		<div style={{ height: '20px' }}>
			<nav
				className={
					Scrolled
						? 'navbar navbar-expand-md navbar-dark fixed-top bg-dark'
						: null
				}
				style={Scrolled ? { height: '80px' } : null}
			>
				<div className='container-fluid' style={{ color: '#eee' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '100%',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								height: '80px',
							}}
						>
							<img
								src='/logo.png'
								style={{
									height: '60px',
									borderRadius: '100%',
									marginRight: '5px',
									// border: '2.5px solid #eee',
								}}
							/>

							<a
								href='/'
								className='h4'
								style={{
									padding: '0',
									margin: '0',
									cursor: 'pointer',
									textDecoration: 'none',
									color: '#eee',
								}}
							>
								FiveM Designs
							</a>
						</div>

						<a
							href='/discord'
							target='_blank'
							style={{
								fontWeight: '700',
								textDecoration: 'none',
								color: '#eee',
								marginLeft: '20px',
							}}
						>
							Discord
						</a>

						<div style={{ marginLeft: 'auto', marginRight: '5px' }}>
							{user ? (
								<Button
									onClick={logout}
									style={{
										fontWeight: '700',
										backgroundColor: 'rgb(255, 98, 0)',
										borderColor: 'rgb(255, 98, 0)',
									}}
								>
									Logout
								</Button>
							) : (
								<Button
									onClick={login}
									style={{
										fontWeight: '700',
										backgroundColor: 'rgb(255, 98, 0)',
										borderColor: 'rgb(255, 98, 0)',
									}}
								>
									Login
								</Button>
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
