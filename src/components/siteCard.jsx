import { Card, Placeholder } from 'react-bootstrap';

export const SiteCard = ({ loading, data }) => {
	return (
		<Card
			bg='secondary'
			text='light'
			style={{
				marginBottom: '2.5vh',
				borderColor: 'rgb(33, 37, 41)',
			}}
		>
			<Card.Body
				style={{
					borderRadius: '1.5px',
					backgroundColor: 'rgb(33, 37, 41)',
				}}
			>
				{!loading ? (
					<></>
				) : (
					<>
						<Placeholder
							as={Card.Title}
							animation='glow'
							style={{ marginBottom: '2vh' }}
						>
							<Placeholder xs={6} style={{ height: '4vh' }} />
						</Placeholder>
						<Placeholder
							animation='glow'
							as={Card.Text}
							style={{ textAlign: 'left' }}
						>
							<Placeholder xs={12} style={{ height: '15vh' }} />
						</Placeholder>
						<Placeholder
							animation='glow'
							as={Card.Text}
							style={{ textAlign: 'left' }}
						>
							<Placeholder.Button
								variant='primary'
								style={{
									backgroundColor: 'rgb(255, 98, 0)',
									borderColor: 'rgb(255, 98, 0)',
								}}
								xs={6}
							/>
						</Placeholder>
					</>
				)}
			</Card.Body>
		</Card>
	);
};
