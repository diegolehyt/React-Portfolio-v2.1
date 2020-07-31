// Pop up Detailed project card component \\

// Import
import React from "react";
import "./style.css";

// in tag styles
const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
  },
  htmlS: {
    fontSize:'36px', 
    color: 'rgb(141, 62, 62)',
    marginRight: '5px'
  },
  nodeS: {
    fontSize:'36px', 
    color: 'rgb(65, 109, 71)',
    marginRight: '5px'
  },
  jsS: {
    fontSize:'36px', 
    color: 'rgb(189, 176, 1)',
    marginRight: '5px'
  },
  cssS: {
    fontSize:'36px', 
    color: 'rgb(62, 87, 141)',
    marginRight: '5px'
  },
  bootS: {
    fontSize:'36px', 
    color: 'rgb(62, 63, 141)',
    marginRight: '5px'
  },
  dbS: {
    fontSize:'36px',
    marginRight: '5px'
  },
  uiS: {
    fontSize:'36px',
    marginRight: '5px',
    color:'lightblue'
  },
  gitS: {
    fontSize:'24px', 
    color: 'rgb(110, 94, 136)'
  },
  githS: {
    fontSize:'24px', 
    color: 'rgb(66, 66, 66)'
  },
  ytS: {
    fontSize:'24px', 
    color: 'lightcoral'
  },
  mhS: {
    maxHeight: '800px'
  },
  mWork: {
    color: '#52a4db'
  },
  H: {
    height: '100%'
  },
  W: {
    width: '100%'
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  viddeo: {
    position: 'fixed',
    minHeight: '100%',
    minWidth: '100%'
  },
  sec: {
    marginTop: '75px'
  }
}

// Using the function component we can deconstruct props,
// in order to inyect the data into the component.
function ProjectCard({ 
  _id,
  title,
  text,
  date,
  node,
  react,
  css3,
  html5,
  js,
  bootstrap,
  uikit,
  database,
  deployment,
  repository,
  demo,
  sampleImg
 }) {
   
  // Export the template for the detailed card, that pop up after clicking on a project card
  // I used conditional rendering for skills and URL classes so if one project does not have
  // certain skills or URL, it will check before and set the class "modal" in case it is "N" for null.
  // Modal class has "display: none", so it hides any empty block of data.
  return (
  
    <div className="modal fade" id={_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-0" style={styles.mhS}>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            
            
            <div className="row">
            
  
              <div className="col-md-6 py-5 pl-5">
                
                <h5 className="font-weight-normal mb-3">{title}</h5>

                <p className="text-muted">{text}</p>

                <ul className="list-unstyled font-small mt-5">
                  <li>
                    <p className="text-uppercase mb-2"><strong>Date</strong></p>
                    <p className="text-muted mb-4">{date}</p>
                  </li>

                  <li>
                    <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                    <p className="text-muted mb-4">
                      <i className={
                        node === "N"
                          ? "modal"
                          : "fab fa-node"
                      } style={styles.nodeS}></i>
                      <i className={
                        react === "N"
                          ? "modal"
                          : "fab fa-react"
                      }  style={styles.uiS}></i>
                      <i className={
                        css3 === "N"
                          ? "modal"
                          : "fab fa-css3-alt"
                      }  style={styles.cssS}></i>
                      <i className={
                        html5 === "N"
                          ? "modal"
                          : "fab fa-html5"
                      } style={styles.htmlS}></i>
                      <i className={
                        js === "N"
                          ? "modal"
                          : "fab fa-js-square"
                      } style={styles.jsS}></i>
                      <i className={
                        bootstrap === "N"
                          ? "modal"
                          : "fab fa-bootstrap"
                      } style={styles.bootS}></i>
                      <i className={
                        database === "N"
                          ? "modal"
                          : "fas fa-database"
                      } style={styles.dbS}></i>
                      <i className={
                        uikit === "N"
                          ? "modal"
                          : "fab fa-uikit"
                      } style={styles.uiS}></i>
                    </p>
                  </li>

                  <li>
                    <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                    <a target="_blank" rel='noopener noreferrer' href={deployment}>- <i className={
                        bootstrap === "N"
                          ? "modal"
                          : "fab fa-github-square"
                      } style={styles.gitS}></i> Deployment</a>
                    <br/>
                    <a target="_blank" rel='noopener noreferrer' href={repository}>- <i className={
                        bootstrap === "N"
                          ? "modal"
                          : "fab fa-git-square"
                      } style={styles.githS}></i> Repository</a>
                    <br/>
                    <a target="_blank" rel='noopener noreferrer' href={demo}>- <i className={
                        bootstrap === "N"
                          ? "modal"
                          : "fab fa-youtube"
                      } style={styles.ytS}></i> Demo</a>
                  </li>
                </ul>
                
              </div>

              <div className="col-md-6">
                
                <div className="view rounded-right" style={styles.H}>
                  <img className="img-fluid"  style={styles.W} src={sampleImg} alt="Sample"/>
                </div>
                
              </div>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )

}

export default ProjectCard;
