import React, { Component } from 'react'

class NewRole extends Component {
  render() {
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <h6 className="mb-0">Add New Role</h6>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="form-group col-md-3">
                  {/* <label htmlFor="firstName">First Name</label> */}
                  <input type="text" name="firstName" id="firstName" className="form-control" autoComplete="off" placeholder="First Name" />
                </div>
                <div className="form-group col-md-3">
                  {/* <label htmlFor="lastName">Last Name</label> */}
                  <input type="text" name="lastName" id="lastName" className="form-control" autoComplete="off" placeholder="Last Name" />
                </div>
                <div className="form-group col-md-3">
                  {/* <label htmlFor="email">Email</label> */}
                  <input type="email" name="email" id="email" className="form-control" autoComplete="off" placeholder="Email" />
                </div>
                <div className="form-group col-md-3">
                  {/* <label htmlFor="mobile">Mobile</label> */}
                  <input type="number" name="mobile" id="mobile" className="form-control" autoComplete="off" placeholder="Mobile" />
                </div>
                <div className="form-group col-md-3">
                  {/* <label htmlFor="password">Password</label> */}
                  <input type="password" name="password" id="password" className="form-control" autoComplete="off" placeholder="Password" />
                </div>
                <div className="form-group col-md-3">
                  {/* <label htmlFor="rePassword">Confirm Password</label> */}
                  <input type="password" name="rePassword" id="rePassword" className="form-control" autoComplete="off" placeholder="rePassword" />
                </div>
                <div className="form-group col-md-3">
                  {/* <label htmlFor="roleType">Role Type</label> */}
                  <select name="roleType" id="roleType" className="form-control">
                    <option value="">Select Role Type</option>
                    <option value="admin">Admin</option>
                    <option value="businessManager">Business Manager</option>
                    <option value="onDemandManager">On Demand Manager</option>
                    <option value="commuteManager">Commute Manager</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  {/* <label htmlFor="employeeID">Employee ID</label> */}
                  <input type="text" name="employeeID" id="employeeID" className="form-control" autoComplete="off" placeholder="Employee ID" />
                </div>
              </div>
              {/* Access */}
              <div className="form-row my-4">
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="dashboard" />
                    <label className="custom-control-label" htmlFor="dashboard">Dashboard</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="roles" />
                    <label className="custom-control-label" htmlFor="roles">Roles</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="archive" />
                    <label className="custom-control-label" htmlFor="archive">Archive</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="communication" />
                    <label className="custom-control-label" htmlFor="communication">Communication</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="promoCodes" />
                    <label className="custom-control-label" htmlFor="promoCodes">Promo Codes</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="qruzBusiness" />
                    <label className="custom-control-label" htmlFor="qruzBusiness">Qruz Business</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="qruzCommute" />
                    <label className="custom-control-label" htmlFor="qruzCommute">Qruz Commute</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="qruzOnDemand" />
                    <label className="custom-control-label" htmlFor="qruzOnDemand">Qruz On-Demand</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="fleet" />
                    <label className="custom-control-label" htmlFor="fleet">Fleet</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="payments" />
                    <label className="custom-control-label" htmlFor="payments">Payments</label>
                  </div>
                </div>
                <div className="form-group col-md-3">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="cancellation" />
                    <label className="custom-control-label" htmlFor="cancellation">Cancellation</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-custom">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewRole