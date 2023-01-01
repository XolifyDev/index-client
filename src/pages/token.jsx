import { useEffect } from 'react';
import { tokenPrefix } from '../utils';
import { Spinner } from 'react-bootstrap';

export const UserTokenPage = ({ match }) => {
	useEffect(() => {
		const { token } = match.params;

		localStorage.setItem(tokenPrefix, token);

		window.location.href = '/';
	}, []);

	return (
		<div style={{ textAlign: 'center' }}>
			<Spinner
				animation='border'
				role='status'
				style={{
					height: '225px',
					width: '225px',
					fontSize: '30px',
					marginTop: '150px',
				}}
			>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>

			<p
				style={{
					marginTop: '25px',
					fontSize: '25px',
					fontWeight: '700',
					fontStyle: 'italic',
				}}
			>
				Setting User Token...
			</p>
		</div>
	);
};
