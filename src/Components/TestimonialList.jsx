import React from 'react';

import TestImg from '../vendors/img/testimonial.jpg';
import TestImg2 from '../vendors/img/medium.jpg';
import TestImg3 from '../vendors/img/testimonial.jpg';

class TestimonialList extends React.Component {
  state = {
    testimonial: [
      {
        id: 1,
        name: 'seun',
        position: 'chiefUser',
        img: TestImg,
        testimony:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blindtexts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean',
      },
      {
        id: 2,
        name: 'Tope',
        position: 'Stren',
        img: TestImg2,
        testimony:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blindtexts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean',
      },
      {
        id: 3,
        name: 'Ayomide',
        position: 'Commander',
        img: TestImg3,
        testimony:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blindtexts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean',
      },
    ],
  };
  render() {
    return (
      <>
        <section className="ftco-section ftco-no-pt ftco-no-pb testimony-section img">
          <div className="overlay"></div>
          <div className="container">
            <div className="row ftco-animated justify-content-center">
              <div className="col-md-6 p-4 pl-md-0 py-md-5 pr-md-5 aside-stretch d-flex align-items-center">
                <div className="heading-section heading-section-white">
                  <span className="subheading" style={{ color: `#fff` }}>
                    Read Testimonials
                  </span>
                  <h2 className="mb-4" style={{ fontSize: `40px` }}>
                    It's always a joy to hear that the work we do has positively
                    reviews
                  </h2>
                </div>
              </div>
<div className="col-md-6 pl-md-5 py-4 py-md-5 aside-stretch-right">
  {/* <div className="col-md-6">  */}
              {this.state.testimonial.slice(0,1).map((item) => {
                return (
                  
                    // <div className="carousel-testimony owl-carousel ftco-owl">
                      <div className="item" key={item.id}>
                        <div className="testimony-wrap py-4 pb-5 d-flex justify-content-between align-items-end">
                          <div
                            className="user-img"
                            style={{ backgroundImage: `url(${item.img})` }}
                          >
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="fa fa-quote-left"></i>
                            </span>
                          </div>
                          <div className="text">
                            <p className="mb-4">{item.testimony}</p>
                            <p className="name">{item.name}</p>
                            <span className="position">{item.position}</span>
                          </div>
                        </div>
                      </div>
                    //  </div> 
                 
                );
              })}
              {/* </div> */}
               </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default TestimonialList;
