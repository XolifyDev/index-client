import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserAuthContext } from '../contexts';

export const Nav = () => {
	const { login, logout, user } = useContext(UserAuthContext);

	return (
		<nav
			className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'
			style={{ height: '80px' }}
		>
			<div className='container-fluid' style={{ color: '#eee' }}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						width: '100%',
					}}
				>
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
	);
};
