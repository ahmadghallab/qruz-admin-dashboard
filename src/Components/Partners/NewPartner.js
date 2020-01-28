import React, { Component } from 'react'

class NewPartner extends Component {
  render() {
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <h6 className="mb-0">Add New Partner</h6>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <form>
              <div className="form-row mb-4">
                <div className="form-group col-md-3">
                  <input type="text" name="partnerName" id="partnerName" className="form-control" autoComplete="off" placeholder="Partner Name" />
                </div>
                <div className="form-group col-md-3">
                  <input type="text" name="partnerType" id="partnerType" className="form-control" autoComplete="off" placeholder="Partner Type" />
                </div>
                <div className="form-group col-md-3">
                  <input type="number" name="phone1" id="phone1" className="form-control" autoComplete="off" placeholder="Phone 1" />
                </div>
                <div className="form-group col-md-3">
                  <input type="number" name="phone2" id="phone2" className="form-control" autoComplete="off" placeholder="Phone 2" />
                </div>
                <div className="form-group col-md-3">
                  <input type="text" name="partnerSize" id="partnerSize" className="form-control" autoComplete="off" placeholder="Partner Size" />
                </div>
                <div className="form-group col-md-3">
                  <input type="email" name="email" id="email" className="form-control" autoComplete="off" placeholder="Email" />
                </div>
                <div className="form-group col-md-3">
                  <input type="password" name="password" id="password" className="form-control" autoComplete="off" placeholder="Password" />
                </div>
                <div className="form-group col-md-3">
                  <input type="password" name="rePassword" id="rePassword" className="form-control" autoComplete="off" placeholder="rePassword" />
                </div>
                <div className="form-group col-md-3">
                  <select name="roleType" id="roleType" className="form-control">
                    <option value="">Max No. of trips</option>
                    <option value="1">1</option>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-custom">Save and Continue</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPartner