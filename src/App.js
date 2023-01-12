import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageLayout } from './layouts/page';
import { UserAuthContext } from './contexts';
import { REACT_APP_DEV_PORTAL } from './utils';

import {
	LandingPage,
	UserSitesPage,
	TemplatesPage,
	UserTokenPage,
	HostingPage,
	AccountPage,
	PageNotFound,
	DevelopersPage,
	PortalsPage,
	ProxyPage,
	CheckoutPage,
	UserCartPage,
} from './pages';

const App = () => {
	const { login, logout } = useContext(UserAuthContext);

	return REACT_APP_DEV_PORTAL ? (
		<BrowserRouter>
			<PageLayout container>
				<Container
					style={{
						marginTop: '65px',
						overflow: 'none',
						height: '75vh',
						overflow: 'auto',
					}}
				>
					<Switch>
						<Route path='/' component={PortalsPage} exact={true} />

						<Route
							path='/proxy-service'
							component={ProxyPage}
							exact={true}
						/>

						<Route component={() => (window.location.href = '/')} />
					</Switch>
				</Container>
			</PageLayout>
		</BrowserRouter>
	) : (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={LandingPage} />

				<Route path='/token/:token' exact component={UserTokenPage} />

				<Route path='/developers' exact component={DevelopersPage} />

				<Route path='/templates' exact component={TemplatesPage} />

				<Route path='/hosting' exact component={HostingPage} />

				<Route path='/sites' exact component={UserSitesPage} />

				<Route path='/account' exact component={AccountPage} />

				<Route path='/checkout' exact component={CheckoutPage} />

				<Route path='/cart' exact component={UserCartPage} />

				<Route
					exact
					path='/redirect'
					component={() => {
						login();

						return '';
					}}
				/>

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
