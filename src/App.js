import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LandingPage, UserSitesPage } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={LandingPage} exact />

				<Route path='/sites' component={UserSitesPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
