import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const { REACT_APP_DEV_PORTAL } = process.env;

export const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
};

export const silentUpdate = (url) => {
	return window.history.replaceState(null, null, url);
};

export function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

export * from './auth';
export * from './axios';
export * from './user';
export * from './sites';
export * from './billing';

export { REACT_APP_DEV_PORTAL };
