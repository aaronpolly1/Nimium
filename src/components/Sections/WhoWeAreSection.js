import React from "react";
import SectionHeader from "../SectionHeader";

import StatsContainer from "../StatsContainer";

const WhoWeAreSection = props => {
  return (
    <div className="sectionContainer">
      <SectionHeader
        title="THIS IS WHO WE ARE"
        subDescription="We are a team of business strategists, consultants and freelancers with expertise in a wide range of fields and markets.  "
      />

      <br></br>
      <div className="StatsContainer">
       
       <StatsContainer subtitle="consultants" number="20+" />
       <StatsContainer subtitle="companies served" number="30" />  <StatsContainer subtitle="problems solved" number="153+"/>

      </div>
    </div>
  );
};

export default WhoWeAreSection;
