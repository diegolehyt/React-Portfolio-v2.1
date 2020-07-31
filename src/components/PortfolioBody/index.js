// Portfolio card in main Body \\
import React from "react";
import "./style.css";

// Using the function component we also use props,
// in order to inyect the data into the component.
function PortfolioBody(props) {
   
  // Template for project cards, in main body of Portfolio page
  return (

    <a className="card hoverable mb-4 col-12 col-sm-4" data-toggle="modal" data-target={props.id} href="true">

      
      <img className="card-img-top" src={props.img} alt="Card cap"/>


      <div className="card-body">

        <h5 className="my-3">{props.title}</h5>
        <p className="card-text text-uppercase mb-3">{props.subTitle}</p>

      </div>

    </a>
  )

}

export default PortfolioBody;
