// src/templates/UseCaseTemplate.js
import React from "react"
import "./UseCaseTemplate.css"

import Particles from "react-particles-js"
import Layout from "../components/layout"
import Link from "gatsby-link"
import { IoIosArrowRoundBack } from "react-icons/all";
import { Icon } from "semantic-ui-react"
import SectionHeader from "../components/SectionHeader";

const UseCaseTemplate = ({ data, location, pageContext }) => {



  return (
    <Layout>
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
                  value: "#9c7409",
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
      <div className="fullscreenDetailLeft">
      <div className="mobileTitle" style={{padding:"5%", paddingLeft:"10%"}}>
      <Link to="/#CaseSection">
            <IoIosArrowRoundBack className="backbutton" size="5em"/>
        </Link>
      <SectionHeader title={data.wordpressAcfUsecase.acf.name} />

      </div>
        <img
          height="100%"
          width="100%"
          src={data.wordpressAcfUsecase.acf.main_image.source_url}
        ></img>
      </div>
      
      <div className="fullscreenDetailRight">
        <Link to="/#CaseSection">
            <IoIosArrowRoundBack className="backbutton" size="5em"/>
        </Link>
        <div className="normalTitle" >
      <SectionHeader title={data.wordpressAcfUsecase.acf.name} />

      </div>
        <div className="contentContainer">
          <div
            className="useCaseContent"
            dangerouslySetInnerHTML={{
              __html: data.wordpressAcfUsecase.acf.content,
            }}
          ></div>
        </div>
        {
          (pageContext.previousCase)?(   <Link activeClassName={"usecaseSection"} style={{float:'left'}} className="otherPageLink" to={"/usecases/" + pageContext.previousCase.wordpress_id}>
          Previous Case{" "}
        </Link>):(undefined)
        }
        {
          (pageContext.nextCase)?(        <Link className="otherPageLink" style={{float:'right'}} to={"/usecases/" + pageContext.nextCase.wordpress_id}>Next Case</Link>
          ):(undefined)
        }
     
      </div>
    </Layout>
  )
}
export default UseCaseTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressAcfUsecase(wordpress_id: { eq: $id }) {
      id
      acf {
        content
        function
        name
        summary
        main_image {
          wordpress_id
          source_url
        }
      }
    }                                           
  }
`
