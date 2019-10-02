// src/templates/UseCaseTemplate.js
import React from "react"
import "./UseCaseTemplate.css"

import Particles from "react-particles-js"
import Layout from "../components/layout"
import Link from "gatsby-link"
import { IoIosArrowRoundBack } from "react-icons/all";
import { Icon } from "semantic-ui-react"

const UseCaseTemplate = ({ data, location, pageContext }) => {


  console.log(data.wordpressAcfUsecase)


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
      <div className="fullscreenDetailLeft">
      <h1 className="mobileTitle">{data.wordpressAcfUsecase.acf.name}</h1>
        <img
          height="100%"
          width="100%"
          src={data.wordpressAcfUsecase.acf.main_image.source_url}
        ></img>
      </div>
      
      <div className="fullscreenDetailRight">
        <Link to="/">
            <IoIosArrowRoundBack size="5em"/>
        </Link>

        <h1>{data.wordpressAcfUsecase.acf.name}</h1>
        <div className="contentContainer">
          <div
            className="useCaseContent"
            dangerouslySetInnerHTML={{
              __html: data.wordpressAcfUsecase.acf.content,
            }}
          ></div>
        </div>
        {
          (pageContext.previousCase)?(   <Link to={"/usecases/" + pageContext.previousCase.wordpress_id}>
          Previous Case{" "}
        </Link>):(undefined)
        }
        {
          (pageContext.nextCase)?(        <Link to={"/usecases/" + pageContext.nextCase.wordpress_id}>Next Case</Link>
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
