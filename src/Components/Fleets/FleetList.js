import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Fleets from '../../data/fleets'

class FleetList extends Component {
  render() {
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col align-self-center">
                <form>
                  <input type="text" className="form-control" placeholder="Start typing to search all available fleets"></input>
                </form>
              </div>
              <div className="col-auto align-self-center">
                <Link to={`/fleets/new`} className="btn btn-custom">New Fleet</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0 text-center" colSpan="2">Name</th>
                  <th className="border-top-0 text-center">Mobile</th>
                  <th className="border-top-0 text-center">No. of Cars</th>
                  <th className="border-top-0 text-center">Car Types</th>
                  <th className="border-top-0 text-center">Status</th>
                  <th className="border-top-0" colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                {Fleets.map((fleet) =>
                  <tr key={fleet.id}>
                    <td>
                      <div className="image-cover image-cover-sm" 
                        style={{ backgroundImage: "url("+ fleet.avatar +")" }}>
                      </div>
                    </td>
                    <td className="font-weight-bold">{fleet.first_name} {fleet.last_name}</td>
                    <td className="text-center">{fleet.mobile}</td>
                    <td className="text-center">{fleet.no_of_cars}</td>
                    <td className="text-center">
                      {fleet.car_types.map((carType, index) => 
                        <span key={index} className="badge badge-light mr-1">
                          {carType}
                        </span>
                      )}
                    </td>
                    <td className="text-center">
                      <span className={"badge badge-pill" + (fleet.status === "Active" ? " bg-custom text-white" : " badge-light")}>
                        {fleet.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <Link to={`/fleets/${fleet.id}/drivers`} className="btn btn-sm btn-light">Drivers</Link>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-light">Delete</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default FleetList