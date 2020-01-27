import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">Qruz</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact className="nav-item nav-link" to="/">Dashboard</NavLink>
            <NavLink className="nav-item nav-link" to="/roles">Roles</NavLink>
            <NavLink className="nav-item nav-link" to="/archive">Archive</NavLink>
            <NavLink className="nav-item nav-link" to="/communication">Communication</NavLink>
            <NavLink className="nav-item nav-link" to="/promo-codes">Promo Codes</NavLink>
            <NavLink className="nav-item nav-link" to="/qruz-business">Business</NavLink>
            <NavLink className="nav-item nav-link" to="/qruz-commute">Commute</NavLink>
            <NavLink className="nav-item nav-link" to="/qruz-on-demand">On-demand</NavLink>
            <NavLink className="nav-item nav-link" to="/fleet">Fleet</NavLink>
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