import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Roles from '../../data/roles'

class RoleList extends Component {
  render() {
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col align-self-center">
                <form>
                  <input type="text" className="form-control" placeholder="Start typing to search roles"></input>
                </form>
              </div>
              <div className="col-auto align-self-center">
                <Link to="/roles/new" className="btn btn-custom">New Role</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="border-top-0">ID</th>
                  <th className="border-top-0">Name</th>
                  <th className="border-top-0">Email</th>
                  <th className="border-top-0">Role Type</th>
                  <th className="border-top-0">Status</th>
                  <th className="border-top-0">Last Seen</th>
                  <th className="border-top-0"></th>
                  <th className="border-top-0"></th>
                </tr>
              </thead>
              <tbody>
                {Roles.map((role) =>
                  <tr key={role.id}>
                    <td>{role.id}</td>
                    <td className="font-weight-bold">{role.name}</td>
                    <td>{role.email}</td>
                    <td>{role.role_type}</td>
                    <td>
                      <span className={"badge badge-pill" + (role.status === "Online" ? " bg-custom text-white" : " badge-light")}>
                        {role.status}
                      </span>
                    </td>
                    <td className="text-muted">{role.last_seen}</td>
                    <td>
                      <Link to={`/roles/${role.id}/edit`} className="btn btn-sm btn-light">Edit</Link>
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

export default RoleList