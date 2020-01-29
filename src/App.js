import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import RoleList from './Components/Roles/RoleList'
import Archive from './Components/Archive'
import Communication from './Components/Communication'
import PromoCodes from './Components/PromoCodes'
import QruzBusiness from './Components/QruzBusiness'
import QruzCommute from './Components/QruzCommute'
import QruzOnDemand from './Components/QruzOnDemand'
import FleetList from './Components/Fleets/FleetList'
import NewFleet from './Components/Fleets/NewFleet'
import FleetDrivers from './Components/Fleets/FleetDrivers'
import NewDriver from './Components/Fleets/NewDriver'
import Payments from './Components/Payments'
import Cancellation from './Components/Cancellation'
import Settings from './Components/Settings'
import NewRole from './Components/Roles/NewRole'
import EditRole from './Components/Roles/EditRole'
import NewPartner from './Components/Partners/NewPartner'
import EditPartner from './Components/Partners/EditPartner'
import NewPartnerUser from './Components/Partners/NewPartnerUser'
import PartnerDrivers from './Components/Partners/Drivers'
import PartnerUsers from './Components/Partners/Users'
import PartnerTrips from './Components/Partners/Trips'
import PartnerArchive from './Components/Partners/Archive'
import NewTrip from './Components/Partners/NewTrip'
import EditTrip from './Components/Partners/EditTrip'
import NotFound from './Components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container wrapper">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/roles" component={RoleList} />
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/communication" component={Communication} />
          <Route exact path="/promocodes" component={PromoCodes} />
          <Route exact path="/qruzbusiness" component={QruzBusiness} />
          <Route exact path="/qruzcommute" component={QruzCommute} />
          <Route exact path="/qruzondemand" component={QruzOnDemand} />
          <Route exact path="/fleets" component={FleetList} />
          <Route exact path="/fleets/new" component={NewFleet} />
          <Route exact path="/fleets/:fleetID/drivers" component={FleetDrivers} />
          <Route exact path="/fleets/:fleetID/drivers/new" component={NewDriver} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/cancellation" component={Cancellation} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/roles/new" component={NewRole} />
          <Route exact path="/roles/edit" component={EditRole} />
          <Route exact path="/qruzbusiness/partners/new" component={NewPartner} />
          <Route exact path="/qruzbusiness/partners/:partnerID/edit" component={EditPartner} />
          <Route exact path="/qruzbusiness/partners/:partnerID/users/new" component={NewPartnerUser} />
          <Route exact path="/qruzbusiness/partners/:partnerID/users" component={PartnerUsers} />
          <Route exact path="/qruzbusiness/partners/:partnerID/drivers" component={PartnerDrivers} />
          <Route exact path="/qruzbusiness/partners/:partnerID/trips" component={PartnerTrips} />
          <Route exact path="/qruzbusiness/partners/:partnerID/trips/new" component={NewTrip} />
          <Route exact path="/qruzbusiness/partners/:partnerID/trips/:tripID/edit" component={EditTrip} />
          <Route exact path="/qruzbusiness/partners/:partnerID/archive" component={PartnerArchive} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
