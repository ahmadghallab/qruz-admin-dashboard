import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class PartnerNavLinks extends Component {
  render() {   
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item">
                <NavLink to={`/qruzbusiness/partners/${this.props.id}/users`} className="nav-link">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/qruzbusiness/partners/${this.props.id}/drivers`} className="nav-link">Drivers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/qruzbusiness/partners/${this.props.id}/trips`} className="nav-link">Trips</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/qruzbusiness/partners/${this.props.id}/archive`} className="nav-link">Archive</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PartnerNavLinks