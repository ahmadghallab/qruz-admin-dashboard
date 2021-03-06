import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PartnerUserList from '../../data/partnerUsers'
import PartnerNavLinks from './PartnerNavLinks'

class PartnerUsers extends Component {
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
                  <input type="text" className="form-control" placeholder="Start typing to search all employees/users"></input>
                </form>
              </div>
              <div className="col-auto align-self-center">
                <Link to={`/qruzbusiness/partners/${params.partnerID}/users/new`} className="btn btn-custom">New User</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0 text-center" colSpan="2">Passenger Name</th>
                  <th className="border-top-0 text-center">Mobile</th>
                  <th className="border-top-0 text-center">Trip</th>
                  <th className="border-top-0 text-center">Days</th>
                  <th className="border-top-0 text-center">Status</th>
                  <th className="border-top-0" colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                {PartnerUserList.map((user) =>
                  <tr key={user.id}>
                    <td>
                      <div className="image-cover image-cover-sm" 
                        style={{ backgroundImage: "url("+ user.avatar +")" }}>
                      </div>
                    </td>
                    <td className="font-weight-bold">{user.name}</td>
                    <td className="text-center">{user.mobile}</td>
                    <td className="text-center">{user.trip}</td>
                    <td className="text-center">
                      {user.days.map((day, index) => 
                        <span key={index} className="circle circle-sm bg-custom text-white mr-2">
                          {day}
                        </span>
                      )}
                    </td>
                    <td className="text-center">
                      <span className={"badge badge-pill" + (user.status === "Active" ? " bg-custom text-white" : " badge-light")}>
                        {user.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <Link to={`/qruzbusiness/partners/${params.partnerID}/users/${user.id}/edit`} className="btn btn-sm btn-light">Edit</Link>
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

export default PartnerUsers