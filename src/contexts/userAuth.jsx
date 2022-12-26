import { createContext, useState, useEffect } from 'react';
import { fetchUser, tokenPrefix } from '../utils';
import { API_URL } from '../urls';

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const [token, setToken] = useState(null);

	const login = () => (window.location.href = `${API_URL}/auth/login`);

	const logout = () => {
		localStorage.removeItem(tokenPrefix);

		setUser(null);
		setToken(null);
	};

	const authencateUser = () => {
		if (!token) return;

		fetchUser().then(({ data }) => {
			if (data.error) return;

			setUser(data.user);
		});
	};

	const setUserToken = () => {
		localStorage.setItem(tokenPrefix, token);

		setToken(token);
	};

	const fetchToken = () => {
		const userToken = localStorage.getItem(tokenPrefix);

		if (userToken) setToken(userToken);
	};

	useEffect(authencateUser, [token]);

	useEffect(fetchToken, []);

	return (
		<UserAuthContext.Provider value={{ user, login, setUserToken, logout }}>
			{children}
		</UserAuthContext.Provider>
	);
};
