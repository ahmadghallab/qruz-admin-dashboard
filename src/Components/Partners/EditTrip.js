import React, { Component } from 'react'
import PartnerUsers from '../../data/partnerUsers'

class EditTrip extends Component {
  render() {
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
                    <input type="checkbox" className="custom-control-input" id="toggleCarRideShare" />
                    <label className="custom-control-label" htmlFor="toggleCarRideShare">Car Share</label>
                  </div>
                </div>
              </div>
              <div className="form-row mb-4">
                <div className="form-group col-md-3">
                  <label htmlFor="tripName">Trip Name</label>
                  <input type="text" name="tripName" id="tripName" className="form-control" autoComplete="off" placeholder="Trip Name" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="driver">Assign Driver</label>
                  <select name="driver" id="driver" className="form-control">
                    <option value="">Select a driver</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="time">Trip Time</label>
                  <input type="time" name="time" id="time" className="form-control" autoComplete="off" max="12:59" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" id="location" className="form-control" autoComplete="off" placeholder="Location" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="subscriptionCode">Subscription Code</label>
                  <input type="text" name="subscriptionCode" id="subscriptionCode" className="form-control" autoComplete="off" placeholder="Subscription Code" />
                </div>
              </div>
              <button type="submit" className="btn btn-custom">Save</button>
            </form>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col align-self-center">
                <form>
                  <input type="text" className="form-control" placeholder="Start typing to search and invite users/employees" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {PartnerUsers.map((user) => 
            <div className="col-md-4" key={user.id}>
              <div className="card border-0 mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col align-self-center">
                      <h5 className="mb-1 font-weight-bold">
                        { user.name }
                      </h5>
                      <p className="text-muted">{ user.status }</p>
                      <div>
                        <button type="button" className="btn btn-sm btn-light">
                          Unsubscribe
                        </button>
                      </div>
                    </div>
                    <div className="col-auto align-self-center">
                      <div className="image-cover image-cover-md" 
                        style={{ backgroundImage: "url("+ user.avatar +")" }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditTrip