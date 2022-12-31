import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
};

export const silentUpdate = (url) => {
	return window.history.replaceState(null, null, url);
};

export * from './auth';
export * from './axios';
export * from './user';
export * from './sites';
export * from './billing';
