import API from './axios';

export function fetchSites() {
	return API.get('/sites/get');
}

export function createSite(body) {
	return API.post('/sites/create', body);
}
