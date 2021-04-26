import React from 'react';
import {Link} from 'react-router-dom'

class NavBarHeader extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container d-flex align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item  ">

                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/project" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link
                to="#"
                className="btn-custom"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBarHeader;


// import {DropdownButton, Dropdown } from 'react-bootstrap'
// <DropdownButton
// id="dropdown-basic-button"
// title="Dropdown button"
// >
// <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
// <Dropdown.Item href="#/action-2">
//   Another action
// </Dropdown.Item>
// <Dropdown.Item href="#/action-3">
//   Something else
// </Dropdown.Item>
// </DropdownButton>