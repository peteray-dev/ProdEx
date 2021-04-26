import React from 'react';

import Service from './Service';
import serviceData from '../api/services';
class ServiceMainList extends React.Component {
  state = {
    list: serviceData,
  };
  render() {
    // console.log(this.state);
    return (
      <>
      <section class="ftco-section bg-half-light">
   
        <div className="container my-5 ">
          <div className="row justify-content-center mb-3 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animated">
              <span className="subheading">Our Services</span>
              <h2 className="mb-4">We Offer Services</h2>
            </div>
          </div>
          <div className="row">
            {this.state.list.map((item) => {
              return <Service  item={item}  />;
            })}
          </div>
        </div>
        </section>
      </>
    );
  }
}

export default ServiceMainList;
