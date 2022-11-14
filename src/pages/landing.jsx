import { useEffect, useContext } from 'react';
import { UserAuthContext } from '../contexts';
import { silentUpdate, useQuery } from '../utils';

import { PageLayout } from '../layouts/page';
import { Header } from '../components/header';
import { Templates } from '../components/templates';

export const LandingPage = () => {
	const query = useQuery();

	const { setUserToken } = useContext(UserAuthContext);

	const fetchToken = () => {
		const token = query.get('token');

		if (!token) return;

		setUserToken(token);

		silentUpdate('/');
	};

	useEffect(fetchToken, []);

	return (
		<PageLayout>
			<Header />

			<Templates />
		</PageLayout>
	);
};
