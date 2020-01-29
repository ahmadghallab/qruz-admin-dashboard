import React, { Component } from 'react'

class NewPartnerUser extends Component {
  render() {
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <h6 className="mb-0">Add a new fleet</h6>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <form encType="multipart/form-data">
              <div className="form-row mb-4">
                <div className="form-group col-md-4">
                  <label htmlFor="uploadLogo">Personal Photo</label>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="personalPhoto" />
                    <label className="custom-file-label" htmlFor="personalPhoto">Upload an image</label>
                  </div>
                </div>
              </div>
              <div className="form-row mb-4">
                <div className="form-group col-md-3">
                  <input type="text" name="firstName" id="firstName" className="form-control" autoComplete="off" placeholder="First Name" />
                </div>
                <div className="form-group col-md-3">
                  <input type="text" name="lastName" id="lastName" className="form-control" autoComplete="off" placeholder="Last Name" />
                </div>
                <div className="form-group col-md-3">
                  <input type="number" name="phone" id="phone" className="form-control" autoComplete="off" placeholder="Phone" />
                </div>
                <div className="form-group col-md-3">
                  <input type="email" name="email" id="email" className="form-control" autoComplete="off" placeholder="Email" />
                </div>
              </div>
              <div className="form-row mb-4">
                <div className="form-group col-md-6">
                  <label htmlFor="maxNoOfTrips">Maximum No. of trips</label>
                  <select name="maxNoOfTrips" id="maxNoOfTrips" className="form-control">
                    <option value="">Select One</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="expDay">Account Expire Day</label>
                  <select name="expDay" id="expDay" className="form-control">
                    <option value="">Select Day</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="expMonth">Expire Month</label>
                  <select name="expMonth" id="expMonth" className="form-control">
                    <option value="">Select Month</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="expYear">Expire Year</label>
                  <select name="expYear" id="expYear" className="form-control">
                    <option value="">Select Year</option>
                    <option value="2020">2020</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-custom">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPartnerUser