import React from "react"
import SectionHeader from "../SectionHeader"
import TimeLineItem from "../TimeLineItem/timeLineItem"
import { graphql, useStaticQuery } from "gatsby"

const WhatWeDoSection = props => {
  const query = useStaticQuery(graphql`
    {
      allWordpressWpWorkingsteps {
        edges {
          node {
            id
            title
            wordpress_id
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div class="slide">
      <div className="sectionContainer" >
        <SectionHeader
          title="THIS IS WHAT DO WE DO"
          subDescription="We overcome business obstacles. You set the goal(s), we put a team together, define a strategy and get things done. "
        />
        <h2>COME AGAIN?</h2>
        <p style={{width:'75%'}}>
          We are all about diversity. Want to increase sales? Reduce churn?
          Rebrand your business? Optimize & automate internal processes? Or find
          the best way to outrun your competitors?{" "}
        </p>
        <button
          className="button"
          onClick={() => {
            props.fullpageApi.moveTo(2, 1)
          }}
        >
          DISCOVER HOW WE DO IT
        </button>
      </div>
      <div class="slide">
        <div className="sectionContainer" id="timelinesection">
          <SectionHeader
            title="THIS IS HOW WE DO IT"
            subDescription="Tackling business challenges, we follow these steps: "
          />

          <div className="container">
          
              <section class="timeline">
                <ul>
                  {query.allWordpressWpWorkingsteps.edges.map((step, index) => {
                    return <TimeLineItem step={step.node} index={index} />
                  })}
                </ul>
              </section>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoSection
