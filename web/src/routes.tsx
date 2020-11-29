import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing/';
import OrphanagesMap from './pages/OrphanagesMap/';
import Orphanage from './pages/Orphanage/';
import CreateOrphanage from './pages/CreateOrphanage/';
import CreateOrphanageSuccess from './pages/CreateOrphanageSuccess';
import CreateOrphanageFail from './pages/CreateOrphanageFail';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import RedefinePassword from './pages/RedefinePassword';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/redefinePassword" component={RedefinePassword} />
        <Route path="/orphanages/create/success" component={CreateOrphanageSuccess} />
        <Route path="/orphanages/create/fail" component={CreateOrphanageFail} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
