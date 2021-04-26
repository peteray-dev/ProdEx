import React from 'react';

export default function Teams(props) {
    console.log(props.list);
  return (
    <>
      <div className="col-lg-3 col-sm-6" key={props.list.id}>
        <div className="block-2 ftco-animated">
          <div className="flipper">
            <div
              className="front"
              style={{backgroundImage: `url(${props.list.img})`}}
            >
              <div className="box">
                <h2>{props.list.name}</h2>
                <p>{props.list.position}</p>
              </div>
            </div>
            <div className="back">
              <blockquote>
                <p>
                  &ldquo;{props.list.word} &rdquo;
                </p>
              </blockquote>
              <div className="author d-flex">
                <div className="image align-self-center">
                  <img src={props.list.img} alt="" />
                </div>
                <div className="name align-self-center ml-3">
                {props.list.name}<span className="position">{props.list.position}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
