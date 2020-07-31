import React from "react";
import "./style.css";

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

function ProjectCard() {
  return (
    <div>
      <div className="modal fade" id="revisa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
    
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Revisa</h5>
  
                  <p className="text-muted">Restaurant quality reviewing app, that contains recent relevant information and reviews on a restaurant, affordability, atmosphere/location, food and if it is clean.</p>
  
                  <ul className="list-unstyled font-small mt-5">
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">June 1, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">
                        <i className="fab fa-node" style={styles.nodeS}></i>
                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fab fa-bootstrap" style={styles.bootS}></i>
                        <i className="fas fa-database" style={styles.dbS}></i>
                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://revisaproject2.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/Project2.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://youtu.be/DWZUl9LlSak">- <i className="fab fa-youtube" style={styles.ytS}></i> Demo</a>
                    </li>
                  </ul>
                  
                </div>

                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid"  style={styles.W} src="https://image.freepik.com/foto-gratis/copas-vino-mesa-bokeh-fondo-bac_23-2148261695.jpg" alt="Sample"/>
                  </div>
                  
                </div>
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="burger" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
                
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Eat Da Burger!</h5>
  
                  <p className="text-muted">Web application that can help you keep your Burgers orders more organize. Powered by MySQL and javascript you can see the served and devoured Burgers (from the database).</p>
  
                  <ul className="list-unstyled font-small mt-5">
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">May 17, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">
                        <i className="fab fa-node" style={styles.nodeS}></i>
                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fab fa-bootstrap" style={styles.bootS}></i>
                        <i className="fas fa-database" style={styles.dbS}></i>
                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://secret-garden-39364.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/homework13.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                    </li>
                  </ul>
                  
                </div>

                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid" style={styles.W} src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Sample"/>
                  </div>
                  
                </div>
        
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="fly" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
                
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Flydable</h5>
  
                  <p className="text-muted">"Flydable" (Cheap EconomyFlight Finder) is an app that will help you find the cheapest flight tickets which will provide results in the currency of your choice.</p>
  
                  <ul className="list-unstyled font-small mt-5">
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">April 28, 2020</p>
                    </li>
  
                    <li>
                      <li>
                        <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                        <p className="text-muted mb-4">
                          <i className="fab fa-css3-alt" style={styles.cssS}></i>
                          <i className="fab fa-html5" style={styles.htmlS}></i>
                          <i className="fab fa-js-square" style={styles.jsS}></i>
                        </p>
                      </li>
    
                      <li>
                        <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                        <a target="_blank" rel='noopener noreferrer' href="https://diegolehyt.github.io/project1/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                        <br/>
                        <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/project1.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                      </li>
                    </li>  
                  </ul>
                  
                </div>
                
              
                
                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid" style={styles.W} src="https://c0.wallpaperflare.com/preview/927/474/546/orange-plane-rose-blue.jpg" alt="Sample"/>
                  </div>
                  
                </div>
                
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="notes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
                
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Note Taker</h5>
  
                  <p className="text-muted">Server side application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.</p>
  
                  <ul className="list-unstyled font-small mt-5">
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">may 9, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">
                        <i className="fab fa-node" style={styles.nodeS}></i>
                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fab fa-bootstrap" style={styles.bootS}></i>
                  
                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://mighty-eyrie-28086.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/homework11.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                    </li>
                  </ul>
                  
                </div>
                
              
                
                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid" style={styles.W} src="https://images.squarespace-cdn.com/content/v1/59a8b767d55b41693d47e565/1517889408792-ABQJAX3XBCDT1VL7436T/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/vertical.jpg" alt="Sample"/>
                  </div>
                  
                </div>
                
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myteam" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
                
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Myteam.HTML Generator</h5>
  
                  <p className="text-muted">"Team Generator" is an app that will help you to create HTML pages with the info of your Team members. This app will run in the command line powered by JavaScript, using npm plus the data from the API "Github".</p>
  
                  <ul className="list-unstyled font-small mt-5">
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">April 14, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">
                        <i className="fab fa-node" style={styles.nodeS}></i>
                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fab fa-bootstrap" style={styles.bootS}></i>

                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/homework10.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://youtu.be/go7Hk2zJe04">- <i className="fab fa-youtube" style={styles.ytS}></i> Demo</a>
                    </li>
                  </ul>
                  
                </div>
                
              
                
                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid" style={styles.W} src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/vMyteam.jpg" alt="Sample"/>
                  </div>
                  
                </div>
                
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="weather" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
                
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Weather Dashboard</h5>
  
                  <p className="text-muted">This repository content the html files: index "main page", the CSS styles "style.css", the JavaScript "script.js" and an "image" folder with the captures for this Readme File.</p>
  
                  <ul className="list-unstyled font-small mt-5">
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">March 27, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">

                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fab fa-bootstrap" style={styles.bootS}></i>
            
                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://diegolehyt.github.io/homework6/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/homework6.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                    </li>
                  </ul>
                  
                </div>
                
              
                
                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid" style={styles.W} src="https://i.pinimg.com/736x/4d/16/6b/4d166b4e8a6dd11af1ee5d5764138ac6--lightning-storms-lightning-strikes.jpg" alt="Sample"/>
                  </div>
                  
                </div>
                
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="fitness" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
    
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Fitness Tracker</h5>
  
                  <p className="text-muted">"Fitness" is a web application that can help you keep track of your workout plan more organize. Powered by mongoDB and javascript you can see the workouts with all your exercise plus the stats (from the database).</p>
  
                  <ul className="list-unstyled font-small mt-5">
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">June 12, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">
                      <i className="fab fa-node" style={styles.nodeS}></i>
                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fas fa-database" style={styles.dbS}></i>
                        <i className="fab fa-uikit" style={styles.uiS}></i>
                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://arcane-retreat-10341.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/homework17.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                    </li>
                  </ul>
                  
                </div>

                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid"  style={styles.W} src="https://raw.githubusercontent.com/diegolehyt/React-Portfolio/master/public/images/pesas2.jpg" alt="Sample"/>
                  </div>
                  
                </div>
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="budget" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
                
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Budget Tracker</h5>
  
                  <p className="text-muted">"Budget Tracker" is a web application that can help you keep track of your general budget. Giving users a fast and easy way to track their money, allowing them to access that information anytime is even more important.</p>
  
                  <ul className="list-unstyled font-small mt-5">
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">June 15, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">

                        <i className="fab fa-node" style={styles.nodeS}></i>
                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fab fa-bootstrap" style={styles.bootS}></i>
                        <i className="fas fa-database" style={styles.dbS}></i>
            
                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://murmuring-journey-67575.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/Budget-Tracker.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                    </li>
                  </ul>
                  
                </div>
                
              
                
                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid" style={styles.W} src="https://media.istockphoto.com/photos/gold-piggy-bank-on-cashvertical-picture-id97415315?k=6&m=97415315&s=612x612&w=0&h=tRenVbmtq0MXy4fI80crEzVYAF01uxSHAtYChfcDUF8=" alt="Sample"/>
                  </div>
                  
                </div>
                
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="barsa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
                
                <div className="col-md-6 py-5 pl-5">
                  
                  <h5 className="font-weight-normal mb-3">Employee Directory</h5>
  
                  <p className="text-muted">"Employee Directory" is a web application builded using React App (front end). Giving users a fast and easy way to track their employees non-sensitive data.</p>
  
                  <ul className="list-unstyled font-small mt-5">
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Date</strong></p>
                      <p className="text-muted mb-4">June 27, 2020</p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                      <p className="text-muted mb-4">

                        <i className="fab fa-node" style={styles.nodeS}></i>
                        <i className="fab fa-react" style={styles.uiS}></i>
                        <i className="fab fa-css3-alt" style={styles.cssS}></i>
                        <i className="fab fa-html5" style={styles.htmlS}></i>
                        <i className="fab fa-js-square" style={styles.jsS}></i>
                        <i className="fab fa-bootstrap" style={styles.bootS}></i>
            
                      </p>
                    </li>
  
                    <li>
                      <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                      <a target="_blank" rel='noopener noreferrer' href="https://diegolehyt.github.io/Employee-Directory/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                      <br/>
                      <a target="_blank" rel='noopener noreferrer' href="https://github.com/diegolehyt/Employee-Directory.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                    </li>
                  </ul>
                  
                </div>
                
              
                
                <div className="col-md-6">
                  
                  <div className="view rounded-right" style={styles.H}>
                    <img className="img-fluid" style={styles.W} src="https://raw.githubusercontent.com/diegolehyt/React-Portfolio/master/public/images/blogo.jpg" alt="Sample"/>
                  </div>
                  
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
