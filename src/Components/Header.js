import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact className="nav-item nav-link" to="/">Dashboard</NavLink>
          </div>
          <div className="navbar-nav ml-md-auto">
            <NavLink className="nav-item nav-link" to="/roles">Roles</NavLink>
            <NavLink className="nav-item nav-link" to="/archive">Archive</NavLink>
            <NavLink className="nav-item nav-link" to="/communication">Communication</NavLink>
            <NavLink className="nav-item nav-link" to="/promocodes">Promo Codes</NavLink>
            <NavLink className="nav-item nav-link" to="/qruzbusiness">Business</NavLink>
            <NavLink className="nav-item nav-link" to="/qruzcommute">Commute</NavLink>
            <NavLink className="nav-item nav-link" to="/qruzondemand">On-demand</NavLink>
            <NavLink className="nav-item nav-link" to="/fleets">Fleets</NavLink>
            <NavLink className="nav-item nav-link" to="/payments">Payments</NavLink>
            <NavLink className="nav-item nav-link" to="/cancellation">Cancellation</NavLink>
          </div>
          <div className="navbar-nav ml-md-auto">
            <NavLink className="nav-item nav-link" to="/settings">Settings</NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar