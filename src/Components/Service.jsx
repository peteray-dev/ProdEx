import React from 'react';
import {Link} from 'react-router-dom'

export default function Service(props) {
  return (

      
        <div className="col-md-4" key={props.item.id}>
          <div className="services-wrap" >
            <div
              className="img"
              style={{ backgroundImage: `url(${props.item.img})` }}
            ></div>
            <div className="text">
              <div className="icon">
                <span className="flaticon-architect"></span>
              </div>
              <h2>{props.item.mainWord}</h2>
              <p>{props.item.details}</p>
              <Link to="#" className="btn-custom">
                Read more
              </Link>
            </div>
          </div>
      </div>

  );
}
