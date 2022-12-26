import axios from 'axios';

import { API_URL } from '../urls';

export const tokenPrefix = 'user-token';

const API = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem(tokenPrefix)}`,
	},
});

export default API;
