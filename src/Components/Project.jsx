import React from 'react';
import {Link} from 'react-router-dom'

export default function Project(props) {
    return (
    <>
    
      <div className="col-md-4" key={props.projects.id}>
        <div className="project" >
          <Link
            // to="images/project-1.jpg"
            className="img image-popup d-flex align-items-center"
            style={{ backgroundImage: `url(${props.projects.img})` }}
          >
            <div className="icon d-flex align-items-center justify-content-center mb-5">
              <span className="fa fa-plus"></span>
            </div>
          </Link>
          <div className="text">
            <span className="subheading">{props.projects.subheading}</span>
            <h3>{props.description}</h3>
            <p>
              <span className="fa fa-map-marker mr-1"></span>
              {props.projects.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
