import React from 'react';
import '../Landing_Page/Landing.css';
import Services from '../Services_Page/Services';
import Aboutme from '../About me/Aboutme';
const Landing_page = () => {
  return (
    <>
      <div className="box">
        <div className="nav_landing">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand ms-5" href="#">Portfolio</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse fw-semibold" id="navbarSupportedContent">
                <ul className="navbar-nav me-5 pe-5 d-flex align-items-center ms-auto mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                  </li>

                  <li className="nav-item align-items-center">
                    <button className="btn btn_landing btn-sm ">Contact</button>
                  </li>
                </ul>

              </div>
            </div>
          </nav>

          <div className="row landing_row">
            <div className="col col-landing">
              <div className="container lh-lg">
                <h1> <span>I'm Muhammad Zohaib</span></h1>
                <h3 >I'm Professional</h3>
                <h3 >Web Designer & Developer</h3>
                <p>I can Create Awesome Landing And  Registration Page <br/> in a Short Time</p>
                <button className="btn btn_landing ms-2 w-25 mt-2">Hire Me</button>
              </div>
            </div>
            <div className="col col2">
            </div>

          </div>
        </div>
      </div>
      <Services/>
      <Aboutme/>
    </>
  )
}

export default Landing_page;