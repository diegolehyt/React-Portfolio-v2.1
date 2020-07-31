// All require Libraries from react and our components
import React, { useState, useEffect } from "react";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Mask from "../components/Mask";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioBody from "../components/PortfolioBody";
import ProjectCard from "../components/ProjectCard";

import PortfolioBodyWrapper from "../components/PortfolioBodyWrapper";
import projects from "../projects.json";

// In-line styles used on this page
const styles = {
  mWork: {
    color: '#52a4db'
  }
}

// Building Portfolio page, rendering project cards,
// and pop up detail card
function Portfolio() {

  // set useState in order to keep track of our variables 
  const [projectData, setProjects] = useState([]);

  // useEffect set with an empty array so we populate the page
  // when we enter, with all the projects in our json file.
  useEffect(() => {
    setProjects(projects);
  }, []);

  // Renders our components (maping throw our two components cards),
  // and exported to App.js
  return (
    <Intro>
        
      <Video/>
      <Mask>
          
        <PortfolioContainer>

          {projectData.map((project) => (
            <ProjectCard
              key={project._id}
              _id={project._id}
              text={project.text}
              title={project.title}
              date={project.date}
              node={project.node}
              react={project.react}
              css3={project.css3}
              html5={project.html5}
              js={project.js}
              bootstrap={project.bootstrap}
              uikit={project.uikit}
              database={project.database}
              deployment={project.deployment}
              repository={project.repository}
              demo={project.demo}
              sampleImg={project.sampleImg}
            />
          ))}
      
          <h6 className="font-weight-bold text-center white-text text-uppercase small mb-4 animated fadeInRight">Portfolio</h6>
          <h3 className="font-weight-bold text-center pb-2 animated fadeInRight" style={styles.mWork}>My Work</h3>
          <hr className="w-header my-4 animated fadeInRight"/>
          <p className="lead text-center text-muted pt-2 mb-5 animated fadeInRight white-text">You can find several projects in this section. In order to see more info "CLICK" on a specific card (Deploy URL, Description, Demo, Repository)</p>
               
          <div className="row"></div>
          <PortfolioBodyWrapper>
            {projectData.map((project) => (
              <PortfolioBody
                key={project.title}
                id={project.id}
                img={project.img}
                title={project.title}
                subTitle={project.subTitle}
              />
            ))}
          </PortfolioBodyWrapper>
        </PortfolioContainer>

      </Mask>

    </Intro>
  );
}

export default Portfolio;