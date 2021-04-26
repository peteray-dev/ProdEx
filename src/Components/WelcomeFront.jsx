import React from 'react';
import {Link} from 'react-router-dom'

import image2 from '../vendors/img/laptop.jpg'
import image3 from '../vendors/img/living-room-interior.jpg'

class WelcomeFront extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="ftco-section" id="about-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div
                  className="about-wrap img w-100"
                  style={{backgroundImage: `url(${image2})`}}
                  
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-crane"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-5 pl-md-5">
                <div className="row justify-content-center mb-4 pt-md-4">
                  <div className="col-md-12 heading-section ">
                    <span className="subheading">Welcome to Wilcon</span>
                    <h2 className="mb-4">Wilcon A Construction Company</h2>
                    <div className="d-flex about">
                      <div className="icon">
                        <span className="flaticon-hammer"></span>
                      </div>
                      <h3>
                        We're in this business since 1975 and We provide the
                        best insdustrial services
                      </h3>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <div className="d-flex video-image align-items-center mt-md-4">
                      <Link
                        to="#"
                        className="video img d-flex align-items-center justify-content-center"
                        style={{backgroundImage: `url(${image3})`}}
                      >
                        <span className="fa fa-play-circle"></span>
                      </Link>
                      <h4 className="ml-4">
                        This is how we work on our clients, Watch video
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WelcomeFront;
