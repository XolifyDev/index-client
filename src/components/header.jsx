import { Button } from 'react-bootstrap';

import Banner from '../assets/banner.png';

const ButtonHex = 'rgb(38, 40, 43)';

export const Header = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${Banner})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'none',
				height: '50vh',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#eee',
			}}
		>
			<div style={{ textAlign: 'center' }}>
				<img
					src='/logo.png'
					style={{
						height: '15vh',
						paddingBottom: '2vh',
					}}
				/>

				<h1 className='h3'>FiveM Designs</h1>

				<p
					style={{
						fontWeight: '700',
						marginBottom: '0',
						paddingBottom: '0',
					}}
				>
					FiveM Based website Templates & Hosting.
				</p>

				<div style={{ marginTop: '1vh' }}>
					<Button
						style={{
							fontWeight: '700',
							margin: '5px',
							backgroundColor: ButtonHex,
							borderColor: ButtonHex,
						}}
						href={'http://demo.fivem.design'}
						size='lg'
					>
						<i className='fas fa-globe'></i> Demo Themes
					</Button>

					<Button
						style={{
							fontWeight: '700',
							margin: '5px',
							backgroundColor: ButtonHex,
							borderColor: ButtonHex,
						}}
						href='/discord'
						size='lg'
					>
						<span style={{ fontWeight: '200' }}>
							<i className='fab fa-discord'></i>
						</span>{' '}
						Discord Server
					</Button>
				</div>

				<Button
					style={{
						fontWeight: '700',
						margin: '5px',
						backgroundColor: ButtonHex,
						borderColor: ButtonHex,
					}}
					href='/templates'
					size='lg'
				>
					Site Templates
				</Button>

				<Button
					style={{
						fontWeight: '700',
						margin: '5px',
						backgroundColor: ButtonHex,
						borderColor: ButtonHex,
					}}
					href='/hosting'
					size='lg'
				>
					Hosting Options
				</Button>
			</div>
		</div>
	);
};
