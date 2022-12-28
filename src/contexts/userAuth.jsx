import { createContext, useState, useEffect } from 'react';
import { fetchUser, tokenPrefix } from '../utils';
import { Spinner } from 'react-bootstrap';
import { API_URL } from '../urls';

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const [token, setToken] = useState(null);

	const [finishedLoading, setfinishedLoading] = useState(false);

	const login = () => (window.location.href = `${API_URL}/auth/login`);

	const logout = () => {
		localStorage.removeItem(tokenPrefix);

		setUser(null);
		setToken(null);
	};

	const authencateUser = () => {
		if (!token) return;

		setfinishedLoading(false);

		fetchUser().then(({ data }) => {
			if (data.error) return;

			setUser(data.user);

			setfinishedLoading(true);
		});
	};

	const setUserToken = () => {
		localStorage.setItem(tokenPrefix, token);

		setToken(token);
	};

	const fetchToken = () => {
		const userToken = localStorage.getItem(tokenPrefix);

		if (userToken) {
			setToken(userToken);
		} else {
			setfinishedLoading(true);
		}
	};

	useEffect(authencateUser, [token]);

	useEffect(fetchToken, []);

	return (
		<UserAuthContext.Provider value={{ user, login, setUserToken, logout }}>
			{true ? (
				children
			) : (
				<div style={{ textAlign: 'center', paddingTop: '150px' }}>
					<Spinner
						animation='border'
						role='status'
						style={{
							width: '200px',
							height: '200px',
							fontSize: '35px',
						}}
					>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>

					<p
						style={{
							fontWeight: '700',
							fontStyle: 'italic',
							fontSize: '25px',
							marginTop: '35px',
						}}
					>
						Fetching User Details...
					</p>
				</div>
			)}
		</UserAuthContext.Provider>
	);
};
