import React from "react";

const titleStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "3rem",
  marginBottom: "5px",
  width:"70%",
  lineHeight:"4rem"

};

const hrStyle = {
  width: "10%",
  float: "left",
  height: "7px",
  backgroundColor: "#FFC21C",
  border: "none"
};

const subDescriptionStyle = {
  fontSize: "1.5rem",
  width:"77%"
};

const SectionHeader = props => {

  return (
    <React.Fragment>
      <h1 style={titleStyle}>{props.title}</h1>
      <hr style={hrStyle} />
      <br></br>
      {(props.subDescription)?(  <p className="subDescription" style={subDescriptionStyle}>{props.subDescription}</p>):(undefined) }
   
    </React.Fragment>
  );
};

export default SectionHeader;
