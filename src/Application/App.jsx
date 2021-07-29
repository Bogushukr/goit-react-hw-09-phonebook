import { Component, lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppBar from 'components/AppBar';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import routes from 'routes';

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home" */),
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "register" */),
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "contacts" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "login" */),
);

class Application extends Component {
  componentDidMount() {
    console.log(this.props);
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <AppBar />
        <main>
          <Suspense fallback={null}>
            <Switch>
              <PublicRoute exact path={routes.home} component={HomeView} />
              <PublicRoute
                exact
                restricted
                path={routes.login}
                redirectPath={routes.contacts}
                component={LoginView}
              />
              <PublicRoute
                exact
                restricted
                path={routes.register}
                redirectPath={routes.contacts}
                component={RegisterView}
              />
              <PrivateRoute
                exact
                path={routes.contacts}
                component={ContactsView}
                redirectPath={routes.login}
              />
              <Route
                render={() => <Redirect to={{ pathname: routes.home }} />}
              />
            </Switch>
          </Suspense>
        </main>
      </BrowserRouter>
    );
  }
}

export default Application;
