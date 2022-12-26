import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
	LandingPage,
	UserSitesPage,
	TemplatesPage,
	UserTokenPage,
	HostingPage,
} from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={LandingPage} />

				<Route path='/token/:token' exact component={UserTokenPage} />

				<Route path='/templates' exact component={TemplatesPage} />

				<Route path='/hosting' exact component={HostingPage} />

				<Route path='/sites' exact component={UserSitesPage} />

				<Route
					path='/discord'
					exact
					component={() => {
						window.location.href =
							process.env.REACT_APP_DISCORD_INVITE;

						return null;
					}}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
