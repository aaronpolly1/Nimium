import React from "react"
import CountUp from "react-countup"

const hrStyle = {
  border: " 1px solid #D19900",
  width: "15%",
  position: "relative",
  margin: "0",
}

const numberStyle = {
  fontSize: "17vh",
}

const subTitleStyle = {
  color: "white",
  fontSize: "4vh",
  margin: '0.5em 0em'
}

const CounterContainer = {
  fontWeight: "bold",
  color: "#D19900",
}

const StatsContainer = props => {
  const { number, subtitle, visible, operator } = props
  return (
    <div className="statscontainer" style={CounterContainer}>
      {visible ? (
        <CountUp className="number" style={numberStyle} end={number}></CountUp>
      ) : (
        <span className="number" style={numberStyle}>{number}</span>
      )}
      {operator ? <span className="number" style={numberStyle}>{operator}</span> : undefined}
      <p className="subTitleText" style={subTitleStyle}>{subtitle}</p>
      <hr style={hrStyle} />
    </div>
  )
}

export default StatsContainer
