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
import NewPartner from './Components/Partners/NewPartner'
import EditPartner from './Components/Partners/EditPartner'
import NewPartnerUser from './Components/Partners/NewPartnerUser'
import PartnerDrivers from './Components/Partners/Drivers'
import PartnerUsers from './Components/Partners/Users'
import PartnerTrips from './Components/Partners/Trips'
import PartnerArchive from './Components/Partners/Archive'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container wrapper">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/roles" component={Roles} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/communication" component={Communication} />
        <Route exact path="/promocodes" component={PromoCodes} />
        <Route exact path="/qruzbusiness" component={QruzBusiness} />
        <Route exact path="/qruzcommute" component={QruzCommute} />
        <Route exact path="/qruzondemand" component={QruzOnDemand} />
        <Route exact path="/fleet" component={Fleet} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/cancellation" component={Cancellation} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/roles/new" component={NewRole} />
        <Route exact path="/roles/edit" component={EditRole} />
        <Route exact path="/qruzbusiness/partners/new" component={NewPartner} />
        <Route exact path="/qruzbusiness/partners/:id/edit" component={EditPartner} />
        <Route exact path="/qruzbusiness/partners/:id/users/new" component={NewPartnerUser} />
        <Route exact path="/qruzbusiness/partners/:id/users" component={PartnerUsers} />
        <Route exact path="/qruzbusiness/partners/:id/drivers" component={PartnerDrivers} />
        <Route exact path="/qruzbusiness/partners/:id/trips" component={PartnerTrips} />
        <Route exact path="/qruzbusiness/partners/:id/archive" component={PartnerArchive} />
      </div>
    </BrowserRouter>
  );
}

export default App;
