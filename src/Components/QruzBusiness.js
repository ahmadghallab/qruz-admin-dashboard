import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Organizations from '../data/organizations'

class QruzBusiness extends Component {
  render() {
    return (
      <div>
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col align-self-center">
                <form>
                  <input type="text" className="form-control" placeholder="Start typing to search partners"></input>
                </form>
              </div>
              <div className="col-auto align-self-center">
                <Link to="/qruzbusiness/partners/new" className="btn btn-custom">New Partner</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {Organizations.map((org) => 
            <div className="col-md-4" key={org.id}>
              <div className="card border-0 mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-auto align-self-center">
                      <div className="image-cover image-cover-md" 
                        style={{ backgroundImage: "url("+ org.logo +")" }}>
                      </div>
                    </div>
                    <div className="col align-self-center">
                      <p className="mb-1 text-muted">{ org.partner_type }</p>
                      <h4 className="mb-1 font-weight-bold">
                        <Link to={`/qruzbusiness/partners/${org.id}/users`}>
                          { org.partner_name }
                        </Link>
                      </h4>
                      <p className="text-muted">{ org.max_no_of_trips } trip daily</p>
                      <div>
                        <Link to={`/qruzbusiness/partners/${org.id}/edit`} className="btn btn-sm btn-light mr-2">
                          Edit
                        </Link>
                        <button type="button" className="btn btn-sm btn-light">
                          Del
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default QruzBusiness