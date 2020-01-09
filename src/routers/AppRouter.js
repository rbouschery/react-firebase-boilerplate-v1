import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Route Helpers
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

// Views
import CookiePolicy from '../views/utils/CookiePolicy'
import HomePage from '../views/main/HomePage'
import Imprint from '../views/utils/Imprint'
import NotFoundPage from '../views/utils/NotFoundPage'
import PrivacyPolicy from '../views/utils/PrivacyPolicy'


// Used to ScrollToTop when clicking on Links
import ScrollToTop from '../components/utils/ScrollToTop'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <ScrollToTop>
      <div>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact={true}/>
          <PublicRoute path="/imprint" component={Imprint} reroute={false}/>
          <PublicRoute path="/cookie-policy" component={CookiePolicy} reroute={false}/>
          <PublicRoute path="/privacy-policy" component={PrivacyPolicy} reroute={false}/>
          <Route component={NotFoundPage} />
        </Switch>  
      </div>
    </ScrollToTop>
  </Router>
)

export default AppRouter