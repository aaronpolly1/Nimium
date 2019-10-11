import React, {useEffect} from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { MdMenu } from "react-icons/all"

import LogoFulll from "../assets/logoFull.svg";
//External Libraries
import ReactFullpage from "@fullpage/react-fullpage"

//Section Components
import CaseSection from "../components/Sections/CaseSection"
import HomeSection from "../components/Sections/HomeSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import WhoWeAreSection from "../components/Sections/WhoWeAreSection"
import ContactSection from "../components/Sections/ContactSection"
import { graphql, useStaticQuery } from "gatsby"
import Particles from "react-particles-js"
// import $ from 'jquery' 
import { display } from '@material-ui/system';

const IndexPage = () => {
  let _fullpageApi

  const query = useStaticQuery(graphql`
    {
      allWordpressAcfUsecase {
        nodes {
          wordpress_id
        }
      }
    }
  `)

  var sizeCases = query.allWordpressAcfUsecase.nodes.length

  useEffect(() => {

      var menu = document.querySelector("#navigation");
      var button = document.querySelector('#hamburgermenu').addEventListener("click", _ => menu.classList.toggle('is-active'))
      var menuItems = document.querySelectorAll('li').forEach((item)=>{
          item.addEventListener("click", _ => menu.classList.toggle('is-active'))
      })


      // var urlParams = new URLSearchParams(window.location.search);
      // if(urlParams.has('section'))
      // {
    
      //   document.getElementById(urlParams.get('section')).scrollIntoView();
      // }

  },[]);

  return (
    <Layout>
      <React.Fragment>
        <div id="particles-js">
        <Particles
            params={{
              particles: {
                number: {
                  value: 3,
                  density: {
                    enable: false,
                    value_area: 1037,
                  },
                },
                color: {
                  value: "#9c7409",
                },
                shape: {
                  type:'images',
                  images:[
                    {
                      src: '../../squareborder.png',
                      width:100,
                      height:100
                    
                    },
                    {
                      src: '../../squarerotated.png',
                      width:100,
                      height:100,
                  }
                  ]
                },
                opacity: {
                  value: 0.30517838682439088,
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
                    speed: 105,
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
                  speed: 10,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: true,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },

              retina_detect: true,
            }}
          />
          
        </div>
        
     
        <div className="mobilebar">
            <div className="hamburger">
              <div id="hamburgermenu">
              <MdMenu size="3em" />
              </div>
            </div>
          </div>
      

        <nav className="navigationContainer" id="navigation" >
          
          <div className="verticalLine" style={{flexGrow:"0.1"}}></div>
         <LogoFulll className="svg"/>
          <div className="verticalLine" style={{flexGrow:"0.3"}}></div>
          <ul>
            <li
              onClick={() => {
                _fullpageApi.moveTo(1)
              }}
            >
              HOME
            </li>
            <li
              onClick={() => {
                _fullpageApi.moveTo(2)
              }}
            >
              WHAT WE DO
            </li>
            <li
              onClick={() => {
                _fullpageApi.moveTo(3)
              }}
            >
              WHO WE ARE
            </li>

            {sizeCases >= 3 ? (
              <li
                onClick={() => {
                  _fullpageApi.moveTo(4)
                }}
              >
                CASES
              </li>
            ) : (
              undefined
            )}

            {
              sizeCases >= 3 ? (

                <li
                onClick={() => {
                  _fullpageApi.moveTo(5)
                }}
              >
                CONTACT
              </li>
              ):(
                
            <li
            onClick={() => {
              _fullpageApi.moveTo(4)
            }}
          >
            CONTACT
          </li>
              )
            }

          </ul>
          <div className="verticalLine"></div>
        </nav>

        
      
        <ReactFullpage
    
          //fullpage options
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000} /* Options here */
          responsiveWidth={425}
          lockAnchors={true}
          normalScrollElements={'.timelinescroller , .timeline'}
          anchors={['homesection','whatweDoSection','WhoWeAreSection','CaseSection','ContactSection']}
          render={({ state, fullpageApi }) => {
            _fullpageApi = fullpageApi
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <HomeSection />
                </div>
                <div className="section" id="whatweDoSection2">
                  <WhatWeDoSection fullpageApi={fullpageApi} />
                </div>
                <div className="section">
                  <WhoWeAreSection />
                </div>
                {sizeCases >= 3 ? (
                  <div className="section">
                    <CaseSection />
                  </div>
                ) : (
                  undefined
                )}

                <div className="section">
                  <ContactSection />
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
        
      </React.Fragment>
    </Layout>
  )
}

export default IndexPage
