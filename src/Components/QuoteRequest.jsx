import React from 'react';
import {Link} from 'react-router-dom'
import image4 from '../vendors/img/image-slider-3.jpg'
class Quote extends React.Component {
  render() {
    return (
      <>
        <section className="ftco-intro">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <div
                  className="img"
                  style={{backgroundImage: `url(${image4})`}}
                >
                  <div className="overlay"></div>
                  <h2>Providing Personalized and High Quality Services</h2>
                  <p>
                    We can manage your dream building A small river named Duden
                    flows by their place
                  </p>
                  <p className="mb-0">
                    <Link to="#" className="btn btn-primary px-4 py-3">
                      Request A Quote
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Quote;
