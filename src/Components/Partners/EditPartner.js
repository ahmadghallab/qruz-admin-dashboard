import React, { Component } from 'react'
import Drivers from '../../data/drivers'

class EditPartner extends Component {
  render() {
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <h6 className="mb-0">Edit Partner</h6>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <form encType="multipart/form-data">
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="uploadLogo">Partner Logo</label>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="uploadLogo" />
                    <label className="custom-file-label" htmlFor="uploadLogo">Upload an image</label>
                  </div>
                </div>
              </div>
              <div className="form-row my-4">
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
              <div className="form-row mb-4">
                <div className="form-group col-md-6">
                  <label htmlFor="uploadAttachment">Upload Attachment</label>
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="uploadAttachment" />
                    <label className="custom-file-label" htmlFor="uploadAttachment">E.g. Contract, License, Insurance, etc.</label>
                  </div>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="expDay">Expire Day</label>
                  <select name="expDay" id="expDay" className="form-control">
                    <option value="">Select Day</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="expMonth">Expire Month</label>
                  <select name="expMonth" id="expMonth" className="form-control">
                    <option value="">Select Month</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="expYear">Expire Year</label>
                  <select name="expYear" id="expYear" className="form-control">
                    <option value="">Select Year</option>
                    <option value="1">1</option>
                  </select>
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
                  <input type="text" className="form-control" placeholder="Start typing to search and assign more drivers" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {Drivers.map((driver) => 
            <div className="col-md-4" key={driver.id}>
              <div className="card border-0 mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col align-self-center">
                      <h5 className="mb-1 font-weight-bold">
                        { driver.first_name } { driver.last_name }
                      </h5>
                      <p className="text-muted">{ driver.car_no }</p>
                      <div>
                        <button type="button" className="btn btn-sm btn-light">
                          Unassign
                        </button>
                      </div>
                    </div>
                    <div className="col-auto align-self-center">
                      <div className="image-cover image-cover-md" 
                        style={{ backgroundImage: "url("+ driver.avatar +")" }}>
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

export default EditPartner