import React from 'react';
import { Link, withRouter } from 'react-router-dom'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignOutButton = ({ firebase }) => (
  <Link to={ROUTES.LANDING}>
    <button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  </Link>
);

export default withFirebase(SignOutButton);