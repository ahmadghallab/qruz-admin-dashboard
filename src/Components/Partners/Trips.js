import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import TripList from '../../data/partnerTrips'
import PartnerNavLinks from './PartnerNavLinks'

class PartnerTrips extends Component {
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
                  <input type="text" className="form-control" placeholder="Start typing to search all trips"></input>
                </form>
              </div>
              {/* <div className="col-auto align-self-center">
                <Link to={`/qruzbusiness/partners/${params.id}/trips/new`} className="btn btn-custom">New Trip</Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0 text-center">Trip name</th>
                  <th className="border-top-0 text-center">From</th>
                  <th className="border-top-0 text-center">Assigned Driver</th>
                  <th className="border-top-0 text-center">Subbed Users</th>
                  <th className="border-top-0 text-center">Distance</th>
                  <th className="border-top-0"></th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td colSpan="6" className="text-center text-muted pt-4">
                    No trips yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default PartnerTrips