import React, { useEffect,componentDidMount } from "react"

import Layout from "../components/layout"

import { MdMenu } from "react-icons/all"

import LogoFulll from "../assets/logoFull.svg"
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
import Notifications, {notify} from 'react-notify-toast';

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
  var isTouch = false;

  //eerste event
  function wheelEventMoveSlideright(e) {
    //als de direction down is  ga naar rechts
    if (
      _fullpageApi.getActiveSection().index == 1 &&
      _fullpageApi.getActiveSlide().index == 0
    ) {
      if (e.deltaY > 0) {
        _fullpageApi.moveSlideRight()
      }
    }

    //enable scroll
    _fullpageApi.setAllowScrolling(true)
  }

  useEffect(() => {
    document.querySelector("body").addEventListener("touchstart",function(e)
    {
      isTouch = true;
    });
  

    var menu = document.querySelector("#navigation")
    var hamburger = document.querySelector("#hamburgermenu")
    var button = document
      .querySelector("#hamburgermenu")
      .addEventListener("click", _ => hamburger.classList.toggle("is-active"))

    document
      .querySelector("#hamburgermenu")
      .addEventListener("click", _ => menu.classList.toggle("is-active"))

    var menuItems = document.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", _ => menu.classList.toggle("is-active"))
    })




    
  }, [])

 

  return (
    <Layout>
      <Notifications />
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
                  type: "images",
                  images: [
                    {
                      src: "../../squareborder.png",
                      width: 100,
                      height: 100,
                    },
                    {
                      src: "../../squarerotated.png",
                      width: 100,
                      height: 100,
                    },
                  ],
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
          <button
            class="hamburger hamburger--collapse"
            id="hamburgermenu"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <nav className="navigationContainer" id="navigation">
          <div className="verticalLine" style={{ flexGrow: "0.1" }}></div>
          <LogoFulll className="svg" />
          <div className="verticalLine" style={{ flexGrow: "0.3" }}></div>
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

            {sizeCases >= 3 ? (
              <li
                onClick={() => {
                  _fullpageApi.moveTo(5)
                }}
              >
                CONTACT
              </li>
            ) : (
              <li
                onClick={() => {
                  _fullpageApi.moveTo(4)
                }}
              >
                CONTACT
              </li>
            )}
          </ul>
          <div className="verticalLine"></div>
        </nav>

        <ReactFullpage
          //fullpage options
          licenseKey={"5E56565D-9FBF4FE7-B54135CE-90C453BB"}
          scrollingSpeed={1000} /* Options here */
          responsiveWidth={425}
          scrollHorizontally={true} /* Because we are using the extension */
          scrollHorizontallyKey={"B19E062E-2A8E43E8-A66E6A24-54A16735 "}
          lockAnchors={true}
          afterLoad={function(origin, destination, direction) {
            if (destination.index == 1 && !(isTouch)) {
              //als ge op what do we do komt disable scroll
              _fullpageApi.setAllowScrolling(false)
              _fullpageApi.setKeyboardScrolling(false)

              //Check of er nog eens gescrolled wordt
              document
                .querySelector("body")
                .addEventListener("wheel", function(e) {
                
                  //als de direction down is  ga naar rechts
                  if (
                    _fullpageApi.getActiveSection().index == 1 &&
                    _fullpageApi.getActiveSlide().index == 0
                  ) {
                    if (e.deltaY > 0) {
                      _fullpageApi.moveSlideRight()
                    }
                  }

                  //enable scroll
                  _fullpageApi.setAllowScrolling(true)
                })

              document
                .querySelector("body")
                .addEventListener("wheel", function(e) {
            

                  if (
                    _fullpageApi.getActiveSection().index == 1 &&
                    _fullpageApi.getActiveSlide().index == 1
                  ) {
                    _fullpageApi.setAllowScrolling(false)
                    var timeline = document.getElementById("timeline")
                
  
                    if (e.deltaY < 0) {
                      if (timeline.scrollLeft == 0) {
                        _fullpageApi.moveSlideLeft()
                      }
                    }

                    if (e.deltaY > 0) {
                      //scroll timeline
                      
                      if (
                        timeline.scrollWidth <=
                        timeline.scrollLeft + timeline.clientWidth
                      ) {
                        _fullpageApi.moveSectionDown()
                      }
                    }
                  }

                  //enable scroll
                  //_fullpageApi.setAllowScrolling(true)
                })

              //Check of er nog eens gescrolled wordt
              document
                .querySelector("body")
                .addEventListener("keydown", function(e) {
                  //als de direction down is  ga naar rechts

                  if (_fullpageApi.getActiveSection().index == 1) {
                    if (
                      e.keyCode == "40" &&
                      _fullpageApi.getActiveSlide().index == 0
                    ) {
                      _fullpageApi.moveSlideRight()
                    }
                  }

                  //enable scroll
                  _fullpageApi.setKeyboardScrolling(true)
                })

              document
                .querySelector("body")
                .addEventListener("keydown", function(e) {
                  if (_fullpageApi.getActiveSection().index == 1) {
                    if (
                      e.keyCode == "38" &&
                      _fullpageApi.getActiveSlide().index == 1
                    ) {
                      _fullpageApi.moveSlideLeft()
                    }
                  }

                  //enable scroll
                  _fullpageApi.setKeyboardScrolling(true)
                })

         
            }
          }}

        

          onLeave={function(origin, destination, direction) {
            if (origin.index == 1) {
              document
                .querySelector("body")
                .removeEventListener("keydown", function(e) {
               
                })
            }
          }}
          normalScrollElements={" .timeline , #caseScroller"}
          anchors={[
            "homesection",
            "whatweDoSection",
            "WhoWeAreSection",
            "CaseSection",
            "ContactSection",
          ]}
          render={({ state, fullpageApi }) => {
            if (state.callback == "onLeave") {
            }

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
