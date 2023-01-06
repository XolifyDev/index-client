import { Card, Button } from 'react-bootstrap';

const ServiceCard = () => (
	<Card
		bg='secondary'
		text='light'
		style={{
			marginBottom: '2.5vh',
			border: '3px solid rgb(255, 98, 0)',
		}}
	>
		<Card.Body
			style={{
				borderRadius: '1.5px',
				backgroundColor: 'rgb(33, 37, 41)',
			}}
		>
			<Card.Title>Proxy Service</Card.Title>

			<p style={{ padding: '0', margin: '0' }}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Repellat repellendus, in fugiat esse suscipit
			</p>

			<div style={{ paddingTop: '15px' }}>
				<Button
					href='/proxy-service'
					style={{
						backgroundColor: 'rgb(255, 98, 0)',
						borderColor: 'rgb(255, 98, 0)',
						fontWeight: '700',
						width: '100%',
					}}
				>
					Read Info
				</Button>
			</div>
		</Card.Body>
	</Card>
);

export const PortalsPage = () => {
	return (
		<div style={{ paddingTop: '15px' }}>
			<h1 style={{ padding: '25px 0 25px 0' }}>Developer Services</h1>

			<hr />

			<div className='row' style={{ paddingTop: '10px' }}>
				<div className='col-md-4'>
					<ServiceCard />
				</div>
			</div>
		</div>
	);
};
