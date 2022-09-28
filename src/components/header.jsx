import { Button } from 'react-bootstrap';

export const Header = () => (
	<div
		style={{
			backgroundColor: 'black',
			height: '45vh',
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: '#eee',
		}}
	>
		<div style={{ textAlign: 'center' }}>
			<h1>FiveM Designs</h1>

			<div style={{ marginTop: '1vh' }}>
				<Button style={{ fontWeight: '700', margin: '5px' }}>
					View Templates
				</Button>

				<Button style={{ fontWeight: '700', margin: '5px' }}>
					Support Discord
				</Button>
			</div>
		</div>
	</div>
);
