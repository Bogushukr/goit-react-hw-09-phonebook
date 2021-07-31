import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppBar from 'components/AppBar';
import Notification from 'components/Notification';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import { authOperations } from 'redux/auth';
import { contactsSelectors } from 'redux/contacts';

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

export default function Application() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const message = useSelector(contactsSelectors.getNotifyMessage);
  const visible = useSelector(contactsSelectors.getNotifyState);
  return (
    <BrowserRouter>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Switch>
            <PublicRoute exact path={routes.home}>
              <HomeView />
            </PublicRoute>

            <PublicRoute
              exact
              restricted
              path={routes.login}
              redirectPath={routes.contacts}
            >
              <LoginView />
            </PublicRoute>

            <PublicRoute
              exact
              restricted
              path={routes.register}
              redirectPath={routes.contacts}
            >
              <RegisterView />
            </PublicRoute>
            <PrivateRoute
              exact
              path={routes.contacts}
              redirectPath={routes.login}
            >
              <ContactsView />
            </PrivateRoute>
            <Route render={() => <Redirect to={{ pathname: routes.home }} />} />
          </Switch>
        </Suspense>
      </main>
      {visible && <Notification message={message} />}
    </BrowserRouter>
  );
}