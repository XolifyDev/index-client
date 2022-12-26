import { useEffect } from 'react';
import { tokenPrefix } from '../utils';

export const UserTokenPage = ({ match }) => {
	useEffect(() => {
		const { token } = match.params;

		localStorage.setItem(tokenPrefix, token);
	}, []);

	return (window.location.href = '/');
};
