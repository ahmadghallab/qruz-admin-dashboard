import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import ArchiveList from '../../data/partnerArchives'
import PartnerNavLinks from './PartnerNavLinks'

class PartnerArchive extends Component {
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
                  <input type="text" className="form-control" placeholder="Start typing to search all archives"></input>
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
                  <th className="border-top-0 text-center">ID</th>
                  <th className="border-top-0 text-center">Date a Time</th>
                  <th className="border-top-0 text-center">ADriver</th>
                  <th className="border-top-0 text-center">Subbed Users</th>
                  <th className="border-top-0 text-center">Trip</th>
                  <th className="border-top-0 text-center">Feedback</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td colSpan="6" className="text-center text-muted pt-4">
                    No archives yet
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

export default PartnerArchive