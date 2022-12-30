import { useState, useEffect } from 'react';
import { Card, Placeholder, Button } from 'react-bootstrap';
import { SiteModal } from './siteModal';

import html2canvas from 'html2canvas';

export const SiteCard = ({ loading, site }) => {
	const [ShowSettingsModal, setShowSettingsModal] = useState(false);

	return (
		<>
			<SiteModal
				show={ShowSettingsModal}
				setShow={setShowSettingsModal}
			/>

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
						<>
							<Card.Img src='http://localhost:3000/static/media/store.8fb304ef7e5292e733f9.png' />

							<Card.Title style={{ paddingTop: '15px' }}>
								{site.src}
							</Card.Title>

							<p
								style={{
									margin: '0',
									padding: '0',
									paddingTop: '5px',
									fontWeight: '700',
									fontSize: '18px',
								}}
							>
								Status:{' '}
								<span style={{ fontWeight: '600' }}>
									{site.status}
								</span>
							</p>

							<hr />

							<Button
								target='_blank'
								href={`https://${site.src}`}
								disabled={!site.active}
								style={{
									fontWeight: '700',
									backgroundColor: 'rgb(255, 98, 0)',
									borderColor: 'rgb(255, 98, 0)',
									width: '100%',
								}}
							>
								<i className='fas fa-globe'></i> Visit Site
							</Button>

							<Button
								disabled={!site.active}
								onClick={() => setShowSettingsModal(true)}
								style={{
									fontWeight: '700',
									backgroundColor: 'rgb(63, 65, 66)',
									borderColor: 'rgb(63, 65, 66)',
									width: '100%',
									marginTop: '15px',
								}}
							>
								<i className='fas fa-cog'></i> Modify Site
							</Button>
						</>
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
								<Placeholder
									xs={12}
									style={{ height: '15vh' }}
								/>
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
		</>
	);
};
