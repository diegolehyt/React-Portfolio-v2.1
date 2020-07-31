import React from "react";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Mask from "../components/Mask";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioBody from "../components/PortfolioBody";
import ProjectCard from "../components/ProjectCard";
// import "./portfolio.css";

const styles = {
  mWork: {
    color: '#52a4db'
  }
}

function Portfolio() {
  return (
    <Intro>
        
      <Video/>
      <Mask>
          
        <PortfolioContainer>

          <ProjectCard/>
      
          <h6 className="font-weight-bold text-center white-text text-uppercase small mb-4 animated fadeInRight">Portfolio</h6>
          <h3 className="font-weight-bold text-center pb-2 animated fadeInRight" style={styles.mWork}>My Work</h3>
          <hr className="w-header my-4 animated fadeInRight"/>
          <p className="lead text-center text-muted pt-2 mb-5 animated fadeInRight white-text">You can find several projects in this section. In order to see more info "CLICK" on a specific card (Deploy URL, Description, Demo, Repository)</p>
               
          <div className="row"></div>
        
          <PortfolioBody/>
      
        </PortfolioContainer>

      </Mask>

    </Intro>
  );
}

export default Portfolio;
