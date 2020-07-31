import React from "react";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Mask from "../components/Mask";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  vidddeo: {
    position: 'fixed',
    maxHeight: '100%',
    minWidth: '100%'
  },
  sec: {
    marginTop: '20%',
    height: '100%'
  },
  sic: {
    maxHeight: '100%'
  }
}

function Home() {
  return (
    <Intro>
        
      <Video/>
      <Mask>
        <Container>
          <div className="col-md-12 mb-4 white-text text-center wow fadeIn" style={styles.sec}>

            <h3 style={styles.headerC} className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Diego Lehyt</h3>
            <hr className="hr-light my-4 w-75 style-two"/>
            <h4 style={styles.headerB} className="subtext-header mt-2 mb-4">Creative Full-Stack web developer, ready to work with you.</h4>
            <Link to="/portfolio" className="btn btn-rounded btn-outline-white">
              <i className="fas fa-briefcase"></i> My work
            </Link>

          </div>
        </Container>
      </Mask>
    </Intro>
  );
}

export default Home;
