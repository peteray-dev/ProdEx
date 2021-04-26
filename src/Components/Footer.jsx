import React from 'react';
import {Link} from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer class="ftco-footer">
          <div class="container mb-5 pb-4">
            <div class="row">
              <div class="col-lg col-md-6">
                <div class="ftco-footer-widget">
                  <h2 class="ftco-heading-2 d-flex align-items-center">
                    About
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries.
                  </p>
                  <ul class="ftco-footer-social list-unstyled mt-4">
                    <li>
                      <Link to="#">
                        <span class="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span class="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span class="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="ftco-footer-widget">
                  <h2 class="ftco-heading-2">Links</h2>
                  <div class="d-flex">
                    <ul class="list-unstyled mr-md-4">
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>Project
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>Services
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>Blog
                          Posts
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>
                          Industries
                        </Link>
                      </li>
                    </ul>
                    <ul class="list-unstyled ml-md-5">
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>Help
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>Privacy
                          Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-chevron-right mr-2"></span>Terms of
                          Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-6">
                <div class="ftco-footer-widget">
                  <h2 class="ftco-heading-2">Services</h2>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="#">
                        <span class="fa fa-chevron-right mr-2"></span>Customer
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span class="fa fa-chevron-right mr-2"></span>Prompt
                        Delivery
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span class="fa fa-chevron-right mr-2"></span>Reliable
                        Equipment
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span class="fa fa-chevron-right mr-2"></span>New Heavy
                        Equipment
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg col-md-6">
                <div class="ftco-footer-widget">
                  <h2 class="ftco-heading-2">Have a Questions?</h2>
                  <div class="block-23 mb-3">
                    <ul>
                      <li>
                        <span class="fa fa-map-marker mr-3"></span>
                        <span class="text">
                          203 Fake St. Mountain View, San Francisco, California,
                          USA
                        </span>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-phone mr-3"></span>
                          <span class="text">+2 392 3929 210</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span class="fa fa-paper-plane mr-3"></span>
                          <span class="text">
                            <span
                              class="__cf_email__"
                              data-cfemail="4e272028210e37213b3c2a21232f2720602d2123"
                            >
                              [email&#160;protected]
                            </span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid bg-primary">
            <div class="container">
              <div class="row">
                <div class="col-md-6 aside-stretch py-3">
                  <p class="mb-0">
                    Copyright &copy;
                    <span>{(new Date().getFullYear())}</span>{' '}
                    All rights reserved 
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
