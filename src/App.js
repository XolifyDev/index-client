import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserAuthContext } from './contexts';

import {
	LandingPage,
	UserSitesPage,
	TemplatesPage,
	UserTokenPage,
	HostingPage,
	AccountPage,
	PageNotFound,
	DevelopersPage,
} from './pages';

const App = () => {
	const { login, logout } = useContext(UserAuthContext);

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={LandingPage} />

				<Route path='/token/:token' exact component={UserTokenPage} />

				<Route path='/developers' exact component={DevelopersPage} />

				<Route path='/templates' exact component={TemplatesPage} />

				<Route path='/hosting' exact component={HostingPage} />

				<Route path='/sites' exact component={UserSitesPage} />

				<Route path='/account' exact component={AccountPage} />

				<Route
					exact
					path='/login'
					component={() => {
						login();

						return '';
					}}
				/>

				<Route
					exact
					path='/logout'
					component={() => {
						logout();

						window.location.href = '/';

						return '';
					}}
				/>

				<Route component={PageNotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
