import React from 'react';
import {Link} from 'react-router-dom'
import image1 from '../vendors/img/hire.jpg';

import { Gi3DHammer, GiAbstract022, GiBallPyramid } from "react-icons/gi";

import Quote from '../Components/QuoteRequest';
import WelcomeFront from '../Components/WelcomeFront';
import ServiceList from '../Components/ServiceList';
import BestProvider from '../Components/BestProvider';
import ProjectList from '../Components/ProjectList';
import TestimonialList from '../Components/TestimonialList';
import Footer from '../Components/Footer';
import NavHead from '../Components/NavHead';
import NavBarHeader from '../Components/NavBarHeader';

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <>
      <NavHead/>
      <NavBarHeader/>
        <section
          className="hero-wrap js-fullheight"
          style={{ backgroundImage: `url(${image1})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text js-fullheight align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-lg-6 ">
                <div className="mt-5">
                  <h1 className="mb-4">
                    We Build <br />
                    Great Projects
                  </h1>
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove.
                  </p>
                  <p>
                    <Link to="#" className="btn btn-primary mr-2">
                      Our Services
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-white"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Request A Quote
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
          <div className="container">
            <div className="row no-gutters d-flex">
              <div className="col-lg-4 d-flex align-self-stretch ">
                <div className="media block-6 services d-flex">
                  <div className="icon justify-content-center align-items-center d-flex">
                    <span ><Gi3DHammer/></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading mb-3">Quality Construction</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-self-stretch">
                <div className="media block-6 services services-2 d-flex">
                  <div className="icon justify-content-center align-items-center d-flex">
                    <span ><GiAbstract022/></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading mb-3">Professional Liability</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-self-stretch ">
                <div className="media block-6 services d-flex">
                  <div className="icon justify-content-center align-items-center d-flex">
                    <span ><GiBallPyramid/></span>
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading mb-3">Dedicated To Our Clients</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WelcomeFront/>
        <Quote/>
        <ServiceList/>
        <BestProvider/>
        <ProjectList/>
        <TestimonialList/>
        <Footer/>

        
      </>
    );
  }
}

export default HomePage;
