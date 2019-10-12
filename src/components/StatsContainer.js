import React from "react"
import CountUp from "react-countup"

const hrStyle = {
  border: " 1px solid #D19900",
  width: "15%",
  position: "relative",
  margin: "0",
}

const numberStyle = {
  fontSize: "5em",
}

const subTitleStyle = {
  color: "white",
  fontSize: "1em",
  marginBottom: "1em",
}

const CounterContainer = {
  fontWeight: "bold",
  color: "#D19900",
}



const StatsContainer = props => {
  const { number, subtitle, visible, operator } = props
  return (
    <div style={CounterContainer}>
      {visible ? (
        <CountUp style={numberStyle} end={number}></CountUp>
      ) : (
        <span style={numberStyle}>-</span>
      )}
      {operator ? <span style={numberStyle}>{operator}</span> : undefined}
      <p style={subTitleStyle}>{subtitle}</p>
      <hr style={hrStyle} />
    </div>
  )
}

export default StatsContainer

