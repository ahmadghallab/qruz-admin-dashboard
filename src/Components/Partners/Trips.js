import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TripList from '../../data/partnerTrips'
import PartnerNavLinks from './PartnerNavLinks'

class PartnerTrips extends Component {
  render() {
    const { match: { params } } = this.props    
    return (
      <div>
        <PartnerNavLinks id={params.partnerID} />
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col align-self-center">
                <form>
                  <input type="text" className="form-control" placeholder="Start typing to search all trips"></input>
                </form>
              </div>
              <div className="col-auto align-self-center">
                <Link to={`/qruzbusiness/partners/${params.partnerID}/trips/new`} className="btn btn-custom">New Trip</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0">Trip name</th>
                  <th className="border-top-0 text-center">From</th>
                  <th className="border-top-0 text-center">Assigned Driver</th>
                  <th className="border-top-0 text-center">Subbed Users</th>
                  <th className="border-top-0 text-center">Distance</th>
                  <th className="border-top-0" colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                {TripList.map((trip) =>
                  <tr key={trip.id}>
                    <td className="font-weight-bold">{trip.name}</td>
                    <td className="text-center">{trip.from}</td>
                    <td className="text-center">{trip.driver}</td>
                    <td className="text-center">
                      {trip.subbed_users.map((user, index) => 
                        <div key={index} className="image-cover image-cover-sm d-inline-block mr-1" 
                          style={{ backgroundImage: "url("+ user +")" }}>
                        </div>
                      )}
                    </td>
                    <td className="text-center">{trip.distance}</td>
                    <td className="text-center">
                      <Link to={`/qruzbusiness/partners/${params.partnerID}/trips/${trip.id}/edit`} className="btn btn-sm btn-light">Edit</Link>
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

export default PartnerTrips