import React from "react"
import "./timeLineItem.css"

const timeLineItem = props => {
  const { step, index } = props

  return (
    <div className="timeLineItemContainer">
      <div className="timeStepUpContainer">
      {(index + 1) % 2 != 0 ? (
          <div className="timelineContentBox">
              <span>{step.title}</span>
            <p
              dangerouslySetInnerHTML={{
                __html: step.excerpt,
              }}
            ></p>
          </div>
        ) : (
          undefined
        )}
      </div>
      <div className="stepLine">
        <span className="number">{index + 1}</span>
        <div className="line"></div>
      </div>
      <div className="timeStepDownContainer">
        {(index + 1) % 2 == 0 ? (
          <div className="timelineContentBox">
              <span>{step.title}</span>
            <p
              dangerouslySetInnerHTML={{
                __html: step.excerpt,
              }}
            ></p>
          </div>
        ) : (
          undefined
        )}
      </div>
    </div>
  )
}

export default timeLineItem

{
  /* <li>
<span className="number">{index+1}</span>
<div>
  
  <span>{step.title}</span>
  <span dangerouslySetInnerHTML={{
        __html: step.excerpt,
      }}></ span>
</div>
</li> */
}
