import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PartnerDriverList from '../../data/drivers'
import PartnerNavLinks from './PartnerNavLinks'

class PartnerDrivers extends Component {
  render() {
    const { match: { params } } = this.props
    return (
      <div>
        <PartnerNavLinks id={params.id} />
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col align-self-center">
                <form>
                  <input type="text" className="form-control" placeholder="Start typing to search all drivers"></input>
                </form>
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
                {PartnerDriverList.map((driver) =>
                  <tr key={driver.id}>
                    <td>
                      <div className="image-cover image-cover-sm" 
                        style={{ backgroundImage: "url("+ driver.avatar +")" }}>
                      </div>
                    </td>
                    <td>{driver.first_name} {driver.last_name}</td>
                    <td className="text-center">{driver.mobile}</td>
                    <td className="text-center">{driver.car_type}</td>
                    <td className="text-center">{driver.status}</td>
                    <td className="text-center">
                      <Link to="/" className="btn btn-sm btn-light">Edit</Link>
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

export default PartnerDrivers