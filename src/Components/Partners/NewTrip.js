import React, { Component } from 'react'

class NewTrip extends Component {
  constructor() {
    super()
    this.state = {
      carShare: false,
      tripName: "",
      driver: "",
      tripTime: "",
      subscriptionCode: ""
    }
    this.handleCarShareToggle = this.handleCarShareToggle.bind(this)
    this.handleTripNameChange = this.handleTripNameChange.bind(this)
    this.handleDriverChange = this.handleDriverChange.bind(this)
    this.handleTripTimeChange = this.handleTripTimeChange.bind(this)
    this.handleSubscriptionCodeChange = this.handleSubscriptionCodeChange.bind(this)
  }

  handleCarShareToggle() {
    this.setState(
      {
        carShare: !this.state.carShare
      }
    )
  }

  handleTripNameChange(e) {
    this.setState({ tripName: e.target.value})
  }

  handleDriverChange(e) {
    this.setState({ driver: e.target.value})
  }

  handleTripTimeChange(e) {
    this.setState({ tripTime: e.target.value})
  }

  handleSubscriptionCodeChange(e) {
    this.setState({ subscriptionCode: e.target.value})
  }

  render() {
    const { tripName, driver, tripTime, subscriptionCode } = this.state
    const enabled = tripName && driver && tripTime && subscriptionCode
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <h6 className="mb-0">Create a new trip</h6>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <form>
              <div className="form-row mb-4">
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" 
                      className="custom-control-input" 
                      id="toggleCarRideShare"
                      onChange={this.handleCarShareToggle} />
                    <label className="custom-control-label" htmlFor="toggleCarRideShare">
                      {this.state.carShare ? "Ride Share" : "Car Share"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row mb-4">
                <div className="form-group col-md-3">
                  <label htmlFor="tripName">Trip Name</label>
                  <input type="text" 
                    name="tripName" id="tripName" 
                    className="form-control" autoComplete="off" 
                    placeholder="Trip Name"
                    value={this.state.tripName}
                    onChange={this.handleTripNameChange} />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="driver">Assign Driver</label>
                  <select name="driver" id="driver" 
                    className="form-control"
                    value={this.state.driver}
                    onChange={this.handleDriverChange} >
                    <option value="">Select a driver</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="time">Trip Time</label>
                  <input type="time" name="time" id="time" 
                    className="form-control" autoComplete="off" max="12:59"
                    value={this.state.tripTime}
                    onChange={this.handleTripTimeChange} />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" id="location" className="form-control" autoComplete="off" placeholder="Location" disabled={this.state.carShare} />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="subscriptionCode">Subscription Code</label>
                  <input type="text" name="subscriptionCode" 
                    id="subscriptionCode" className="form-control" 
                    autoComplete="off" placeholder="Subscription Code" 
                    value={this.state.subscriptionCode}
                    onChange={this.handleSubscriptionCodeChange} />
                </div>
              </div>
              <button type="submit" className="btn btn-custom" disabled={!enabled}>Save and Continue</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTrip