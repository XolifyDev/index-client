import API from './axios';

export function fetchUser() {
	return API.get('/auth');
}
