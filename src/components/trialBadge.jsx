import { useEffect, useState } from 'react';
import { Badge, Modal, Button, Card, Spinner } from 'react-bootstrap';
import { fetchSites } from '../utils';
import { UpgradeModal } from './upgradeModal';

export const TrialBadge = () => {
	const [ShowSitesModal, setShowSitesModal] = useState(false);

	return (
		<>
			<UpgradeModal
				show={ShowSitesModal}
				setShow={setShowSitesModal}
				trialBage
			/>

			<Badge
				id='specialBadge'
				style={{
					width: '100%',
					height: '35px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: '25px',
				}}
			>
				<a
					style={{
						color: '#eee',
						textDecoration: 'underline',
						cursor: 'pointer',
					}}
					onClick={(e) => {
						e.preventDefault();

						setShowSitesModal(true);
					}}
				>
					<h1
						className='h5'
						style={{
							padding: '0',
							margin: '0',
							fontSize: '18px',
							fontStyle: 'italic',
							fontWeight: '500',
						}}
					>
						For a Limited Time, get 1 Free Month of Upgraded
						Hosting.
					</h1>
				</a>
			</Badge>
		</>
	);
};
