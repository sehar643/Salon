import React from 'react'
import { Link } from 'react-router-dom'

const BigNavbar = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src='./images/logo1.png' height={60} width={90} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active ml-4" style={{ color: "#6C2243" }} aria-current="page" to="/"><strong>Home</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ml-4 " to="/about"><strong>About</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ml-4" to="/contact" tabIndex={-1} aria-disabled="true"><strong>Contact Us</strong></Link>
              </li>
            </ul>
            <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Sign Up</button>
      </form>

          
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BigNavbar

