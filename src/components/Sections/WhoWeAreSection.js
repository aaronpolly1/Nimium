import React from "react";
import SectionHeader from "../SectionHeader";

import StatsContainer from "../StatsContainer";

import VisibilitySensor from "react-visibility-sensor"

const WhoWeAreSection = props => {


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
           <StatsContainer subtitle="consultants" number={30} operator="+" visible={isVisible} />
           <StatsContainer subtitle="companies served" number={30}  visible={isVisible} /> 
           <StatsContainer subtitle="problems solved" number={150} operator="+" visible={isVisible} />
           </React.Fragment>
      }
      </VisibilitySensor>
     
   


      </div>
    </div>
  );
};

export default WhoWeAreSection;
