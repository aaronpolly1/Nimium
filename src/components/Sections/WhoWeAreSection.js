import React from "react";
import SectionHeader from "../SectionHeader";
import { graphql, useStaticQuery } from "gatsby"
import parse from 'html-react-parser';
import StatsContainer from "../StatsContainer";

import VisibilitySensor from "react-visibility-sensor"

const WhoWeAreSection = props => {

  const query = useStaticQuery(graphql`
  {
    allWordpressWpStats {
      edges {
        node {
          id
          acf {
            number
            operator
            subtitle
          }
        }
      }
    }
  }
`)


  return (
    <div className="sectionContainer">
      <SectionHeader
        title="THIS IS WHO WE ARE"
        subDescription="We are a team of business strategists, consultants and freelancers with expertise in a wide range of fields and markets.  "
      />

      <br></br>
      <div className="StatsContainer">
      <VisibilitySensor >
      {({isVisible}) =>
      <React.Fragment>

          {
            query.allWordpressWpStats.edges.map((stat,index) => {
              console.log("stat",stat)
              return   <StatsContainer subtitle={stat.node.acf.subtitle} number={stat.node.acf.number} operator={stat.node.acf.operator} visible={isVisible} />
            })
          }

         
           
           </React.Fragment>
      }
      </VisibilitySensor>
     
   


      </div>
    </div>
  );
};

export default WhoWeAreSection;
