import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"




//External Libraries
import ReactFullpage from "@fullpage/react-fullpage";

//Section Components
import CaseSection from "../components/Sections/CaseSection";
import HomeSection from "../components/Sections/HomeSection";
import WhatWeDoSection from "../components/Sections/WhatWeDoSection";
import WhoWeAreSection from "../components/Sections/WhoWeAreSection";
import ContactSection from "../components/Sections/ContactSection";

import Particles from "react-particles-js"

const IndexPage = () => {

  let _fullpageApi;

return(
  <Layout>
        <React.Fragment>
        <div id="particles-js">
        <Particles
          params={{
            particles: {
              number: {
                value: 5,
                density: {
                  enable: false,
                  value_area: 1037,
                },
              },
              color: {
                value: "#caca37",
              },
              shape: {
                type: "edge",
                stroke: {
                  width: 0,
                  color: "#ffffff",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.20517838682439088,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 138.1008372856477,
                random: false,
                anim: {
                  enable: false,
                  speed: 15,
                  size_min: 6.496617698410762,
                  sync: true,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#371c1c",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <nav className="navigationContainer">
        <div className="verticalLine"></div>
        <ul>
          <li
            onClick={() => {
              _fullpageApi.moveTo(1);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              _fullpageApi.moveTo(2);
            }}
          >
            What Do We Do
          </li>
          <li
            onClick={() => {
              _fullpageApi.moveTo(3);
            }}
          >
            Who Are We
          </li>
          <li
            onClick={() => {
              _fullpageApi.moveTo(4);
            }}
          >
            Cases
          </li>
          <li
            onClick={() => {
              _fullpageApi.moveTo(5);
            }}
          >
            Contact
          </li>
        </ul>
        <div className="verticalLine"></div>
      </nav>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          _fullpageApi = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HomeSection />
              </div>
              <div className="section">
                <WhatWeDoSection fullpageApi={fullpageApi} />
              </div>
              <div className="section">
                <WhoWeAreSection />
              </div>
              <div className="section">
                <CaseSection />
              </div>
              <div className="section">
                <ContactSection />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      }
    </React.Fragment>
    </Layout>
)
    }

export default IndexPage
