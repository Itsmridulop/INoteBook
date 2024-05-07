import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={`text-dark`}>
      <nav className={`navbar fixed-top navbar-expand-lg d-flex justify-content-between bg-light`}>
        <div className="d-flex mx-2">
          <p className={`me-4 py-1 fs-4 text-decoration-none `}>Navbar</p>
          <div className="d-flex align-items-center w-100%" id="navbarSupportedContent">
            <ul className="d-flex list-unstyled">
              <li className="">
                <Link className={`nav-link text-$black active`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="mx-2">
                <Link className={`nav-link`} to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <i className={`fa-solid fa-${props.mode === 'light' ? 'moon' : 'sun'} m-4`} onClick={props.darkModeFunction} style={{ cursor: 'pointer' }}></i> */}
      </nav>
    </div>
  )
}

export default NavBar
