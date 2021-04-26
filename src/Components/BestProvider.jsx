import React from 'react';
import provideImage from '../vendors/img/image-slider-3.jpg'



class BestProvider extends React.Component {
  render() {
    return (
      <>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter mt-5">
          <div
            className="img image-overlay"
            style={{backgroundImage: `url(${provideImage})`}}
          ></div>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6 py-5 bg-secondary aside-stretch">
                <div className="heading-section heading-section-white p-4 pl-md-0 py-md-5 pr-md-5">
                  <span className="subheading">Wilcon A Construction Company</span>
                  <h2 className="mb-4">Best Provider for Industrial Services</h2>
                  <h4>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="row">
                  <div className="col-md-12 d-flex counter-wrap ftco-animated">
                    <div className="block-18 bg-primary d-flex align-items-center justify-content-between">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-engineer"></span>
                      </div>
                      <div className="text">
                        <strong className="number" data-number="48000">
                          125
                        </strong>
                        <span>Project Completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex counter-wrap ftco-animated">
                    <div className="block-18 d-flex align-items-center justify-content-between">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-worker-1"></span>
                      </div>
                      <div className="text">
                        <strong className="number" data-number="54900">
                          80
                        </strong>
                        <span>Happy Customers</span>
                      </div>
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

export default BestProvider
