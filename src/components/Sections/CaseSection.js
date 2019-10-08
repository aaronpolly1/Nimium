import React from "react"
import SectionHeader from "../SectionHeader"
import UseCaseCard from "../UseCaseCard/UseCaseCard"

import { graphql, useStaticQuery } from "gatsby"

const CaseSection = props => {
  const query = useStaticQuery(graphql`
    {
      allWordpressAcfUsecase {
        nodes {
          acf {
            name
            function
            summary
            content
            main_image {
              source_url
            }
          }
          wordpress_id
        }
      }
    }
  `)

  let previousCase

  

  return (
    <div className="sectionContainer " id='usecaseSection'>
      <SectionHeader title="DISCOVER OUR CASES" />
      <br></br>
      <div className="caseScroller">
        <div className="caseContainer">
          <div className="scrollbox" id="scrollCasesLeft"></div>
          {query.allWordpressAcfUsecase.nodes.map((node, index) => {
            previousCase = node.wordpress_id
            return <UseCaseCard case={node} />
          })}
          <div className="scrollbox right"></div>
        </div>
      </div>
    </div>
  )
}

export default CaseSection
