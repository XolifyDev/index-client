import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LandingPage, UserSitesPage, TemplatesPage } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact={true} component={LandingPage} />

				<Route
					path='/templates'
					exact={true}
					component={TemplatesPage}
				/>

				<Route path='/sites' exact={true} component={UserSitesPage} />

				<Route
					path='/discord'
					exact={true}
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
