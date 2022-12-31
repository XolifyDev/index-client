import API from './axios';

export function accessBilling() {
	return API.get('/billing/panel');
}
