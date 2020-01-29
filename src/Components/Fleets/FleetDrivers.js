import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FleetDriverList from '../../data/drivers'
import Fleets from '../../data/fleets'

class FleetDrivers extends Component {
  render() {
    const { match: { params } } = this.props
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-auto align-self-center">
                <div className="image-cover image-cover-md" 
                  style={{ backgroundImage: "url("+ Fleets[params.fleetID].avatar +")" }}>
                </div>
              </div>
              <div className="col align-self-center">
                <p className="mb-1 text-muted">{ Fleets[params.fleetID].no_of_cars } Cars</p>
                <h4 className="mb-1 font-weight-bold">
                  {Fleets[params.fleetID].first_name} {Fleets[params.fleetID].last_name}
                </h4>
                <p className="text-muted">{ FleetDriverList.length } drivers</p>
                <div>
                  <Link to={`/fleets/${params.fleetID}/edit`} className="btn btn-sm btn-light mr-2">
                    Edit this fleet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col align-self-center">
                <form>
                  <input type="text" className="form-control" placeholder="Start typing to search drivers"></input>
                </form>
              </div>
              <div className="col-auto align-self-center">
                <Link to={`/fleets/${params.fleetID}/drivers/new`} className="btn btn-custom">
                  New Driver
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0 text-center" colSpan="2">Driver Name</th>
                  <th className="border-top-0 text-center">Mobile</th>
                  <th className="border-top-0 text-center">Car Type</th>
                  <th className="border-top-0 text-center">Status</th>
                  <th className="border-top-0" colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                {FleetDriverList.map((driver) =>
                  <tr key={driver.id}>
                    <td>
                      <div className="image-cover image-cover-sm" 
                        style={{ backgroundImage: "url("+ driver.avatar +")" }}>
                      </div>
                    </td>
                    <td className="font-weight-bold">{driver.first_name} {driver.last_name}</td>
                    <td className="text-center">{driver.mobile}</td>
                    <td className="text-center">{driver.car_type}</td>
                    <td className="text-center">
                      <span className={"badge badge-pill" + (driver.status === "Active" ? " bg-custom text-white" : " badge-light")}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <Link to={`/fleets/${params.fleetID}/drivers/${driver.id}/edit`} className="btn btn-sm btn-light">Edit</Link>
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

export default FleetDrivers