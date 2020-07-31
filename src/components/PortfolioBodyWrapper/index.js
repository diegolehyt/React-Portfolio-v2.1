import React from "react";
import "./style.css";

function PortfolioBodyWrapper(props) {
  return (
  <div className="tab-content mb-5  animated fadeInRight">
      <div className="tab-pane fade show in active" id="panel31" role="tabpanel">
        <div className="row" {...props}></div>
      </div>
  </div>
  )    
  ;
}

export default PortfolioBodyWrapper;
