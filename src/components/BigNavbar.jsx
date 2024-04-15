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
            {/* <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Sign Up</button>
      </form> */}

            <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
              SignUp
            </button>

            {/* Modal */}
            <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content bg-modal-out">
                  <div className="modal-header bg-modal">
                    <h5 className="modal-title form-title" id="exampleModalLabel">MS Salon</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i> </button>
                  </div>
                  <div className="modal-body">

                    <div className="section boody">
                      <div className="container">
                        <div className="row full-height justify-content-center">
                          <div className="col-12 text-center align-self-center ">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                              <h6 className="form-signup mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                              <label htmlFor="reg-log" />
                              <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                  <div className="card-front">
                                    <div className="center-wrap">
                                      <div className="section text-center">
                                        <h4 className="form-login mb-4 pb-3">Log In</h4>
                                        <div className="form-group">
                                          <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                          <i className="input-icon uil uil-at" />
                                        </div>
                                        <div className="form-group mt-2">
                                          <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                          <i className="input-icon uil uil-lock-alt" />
                                        </div>
                                        <a href="#" className="btn mt-4">submit</a>
                                        <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card-back">
                                    <div className="center-wrap">
                                      <div className="section text-center">
                                        <h4 className="form-login mb-4 pb-3">Sign Up</h4>
                                        <div className="form-group">
                                          <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                          <i className="input-icon uil uil-user" />
                                        </div>
                                        <div className="form-group mt-2">
                                          <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                          <i className="input-icon uil uil-at" />
                                        </div>
                                        <div className="form-group mt-2">
                                          <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                          <i className="input-icon uil uil-lock-alt" />
                                        </div>
                                        <a href="#" className="btn mt-4">submit</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BigNavbar

