import React from 'react';
import {Link} from 'react-router-dom'

class NavHead extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="py-1 top">
          <div className="container">
            <div className="row">
              <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
                <p className="mb-0 w-100">
                  <span className="fa fa-paper-plane"></span>
                  <span className="text">
                    <Link
                      to="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="2851475d5a4d45494144684d45494144064b4745"
                    >
                      [email&#160;protected]
                    </Link>
                  </span>
                </p>
              </div>
              <div className="col-sm justify-content-center d-flex mb-md-0 mb-2">
                <div className="social-media">
                  <p className="mb-0 d-flex">
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook">
                        <i className="sr-only">Facebook</i>
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter">
                        <i className="sr-only">Twitter</i>
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram">
                        <i className="sr-only">Instagram</i>
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-dribbble">
                        <i className="sr-only">Dribbble</i>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
                <p className="mb-0 register-link">
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Inquire Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-5">
          <div className="container">
            <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
              <div className="col-md-4 d-flex mb-2 mb-md-0">
                <Link
                  className="navbar-brand d-flex align-items-center"
                  to="index.html"
                >
                  <span className="flaticon flaticon-crane"></span>
                  <span className="ml-2">
                    Inspired <small>Industrial Company</small>
                  </span>
                </Link>
              </div>
              <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="fa fa-map"></span>
                </div>
                <div className="pr-md-4 pl-md-3 pl-3 text">
                  <p className="con">
                    <span>Free Call</span> <span>+1 234 456 78910</span>
                  </p>
                  <p className="con">Call Us Now 24/7 Customer Support</p>
                </div>
              </div>
              <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text pl-3 pl-md-3">
                  <p className="hr">
                    <span>Our Location</span>
                  </p>
                  <p className="con">
                    198 West 21th Street, Suite 721 New York NY 10016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavHead;
