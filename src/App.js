import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Roles from './Components/Roles'
import Archive from './Components/Archive'
import Communication from './Components/Communication'
import PromoCodes from './Components/PromoCodes'
import QruzBusiness from './Components/QruzBusiness'
import QruzCommute from './Components/QruzCommute'
import QruzOnDemand from './Components/QruzOnDemand'
import Fleet from './Components/Fleet'
import Payments from './Components/Payments'
import Cancellation from './Components/Cancellation'
import Settings from './Components/Settings'
import NewRole from './Components/NewRole'
import EditRole from './Components/EditRole'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-4">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/roles" component={Roles} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/communication" component={Communication} />
        <Route exact path="/promo-codes" component={PromoCodes} />
        <Route exact path="/qruz-business" component={QruzBusiness} />
        <Route exact path="/qruz-commute" component={QruzCommute} />
        <Route exact path="/qruz-on-demand" component={QruzOnDemand} />
        <Route exact path="/fleet" component={Fleet} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/cancellation" component={Cancellation} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/roles/new" component={NewRole} />
        <Route exact path="/roles/edit" component={EditRole} />
      </div>
    </BrowserRouter>
  );
}

export default App;
