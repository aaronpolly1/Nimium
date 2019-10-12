import React, { useEffect } from "react"
import "./timeLineItem.css"

const timeLineItem = props => {
  const { step, index } = props



  return (
    <div className="timeLineItemContainer">
      <div className="timeStepUpContainer">
      {(index + 1) % 2 != 0 ? (
          <div className="timelineContentBox">
              <span className="title">{step.title}</span>
            <span className="content"
              dangerouslySetInnerHTML={{
                __html: step.excerpt,
              }}
            ></span>
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
              <span className="title">{step.title}</span>
            <span className="content"
              dangerouslySetInnerHTML={{
                __html: step.excerpt,
              }}
            ></span>
          </div>
        ) : (
          undefined
        )}
      </div>
    </div>
  )
}

export default timeLineItem

