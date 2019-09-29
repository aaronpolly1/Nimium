import React from "react";
import './timeLineItem.css';



const timeLineItem = props => {

  const { step , index }  = props;
  console.log(step);

  return (
    <li>
      <span className="number">{index+1}</span>
      <div>
        <span>{step.title}</span>
        <span dangerouslySetInnerHTML={{
              __html: step.excerpt,
            }}></ span>
      </div>
    </li>
  );
};

export default timeLineItem;
