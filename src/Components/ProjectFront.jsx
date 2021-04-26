import React from 'react';
import {Link} from 'react-router-dom'
import img from '../vendors/img/image-slider-3.jpg';

class ProjectFront extends React.Component {
  state = {};
  render() {
    return (
      <>

        <section
          className="hero-wrap hero-wrap-2"
          style={{ backgroundImage: `url(${img})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-start">
              <div className="col-md-9 ftco-animated pb-5">
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <Link to="/">
                      Home <i className="fa fa-chevron-right"></i>
                    </Link>
                  </span>{' '}
                  <span>
                    Projects <i className="fa fa-chevron-right"></i>
                  </span>
                </p>
                <h1 className="mb-3 bread">Projects</h1>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProjectFront;
