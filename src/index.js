import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { UserAuthContextProvider,CartItemsContextProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<UserAuthContextProvider>
			<CartItemsContextProvider>
				<App />
			</CartItemsContextProvider>
		</UserAuthContextProvider>
	</React.StrictMode>
);
