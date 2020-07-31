import React from "react";
import "./style.css";

const styles = {
  sec: {
    marginTop: '75px'
  }
}

function PortfolioContainer(props) {
  return (
    <div className="container my-5">
      <section style={styles.sec} {...props}></section>
    </div>
  )

}

export default PortfolioContainer;
