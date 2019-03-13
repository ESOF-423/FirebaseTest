import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withAuthentication }  from '../Session'

import Navigation from '../Navigation/Navigation'
import LandingPage from '../PageLanding/PageLanding'
import SignUpPage from '../PageSignUp/PageSignUp'
import SignInPage from '../PageSignIn/PageSignIn'
import PasswordForgetPage from '../PagePasswordForget/PagePasswordForget'
import HomePage from '../PageHome/PageHome'
import AccountPage from '../PageAccount/PageAccount'
import AdminPage from '../PageAdmin/PageAdmin'
import MemberPage from '../PageMember/PageMember'
import EventPage from '../PageEvent/PageEvent'

import * as ROUTES from '../../constants/routes'

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.MEMBER} component={MemberPage} />
      <Route path={ROUTES.EVENT} component={EventPage} />

    </div>
  </Router>
);

export default withAuthentication(App);
