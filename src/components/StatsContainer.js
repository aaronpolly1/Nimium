import React from "react"
import { relative } from "path";

const hrStyle = {

    border: " 3px solid #D19900",
    width:"35%",
    position:"relative",
    margin:"0"

}

const numberStyle = {
    fontSize:"8rem",
}

const subTitleStyle = {
    color:"white",
    fontSize:"1.5rem",
    marginBottom:"1rem"
}

const CounterContainer = {
    fontWeight: 'bold',
    color:"#D19900"
}

const StatsContainer = (props) => {

  
    const { number,subtitle } = props;

    return (
        <div style={CounterContainer}>
            <span style={numberStyle}>{number}</span>
            <p style={subTitleStyle}>{subtitle}</p>
            <hr style={hrStyle}/>
        </div>
    )

}

export default StatsContainer;