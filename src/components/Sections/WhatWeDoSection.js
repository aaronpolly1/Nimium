import React, {useEffect}  from "react"
import SectionHeader from "../SectionHeader"
import TimeLineItem from "../TimeLineItem/timeLineItem"
import { graphql, useStaticQuery } from "gatsby"
import { IoIosArrowRoundBack } from "react-icons/all";
import Link from "gatsby-link"
import { func } from "prop-types";


const WhatWeDoSection = props => {
  const query = useStaticQuery(graphql`
    {
      allWordpressWpWorkingsteps {
        edges {
          node {
            id
            title
            wordpress_id
            excerpt
          }
        }
      }
    }
  `)



  
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('timeline').scrollLeft -= (delta*40); // Multiplied by 40
    e.preventDefault();
}

  useEffect(() => {

    if (document.getElementById('timeline').addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.getElementById('timeline').addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document.getElementById('timeline').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      document.getElementById('timeline').attachEvent("onmousewheel", scrollHorizontally);
  }

 

},[]);

  return (
    <React.Fragment>
    <div class="slide" >
      <div className="sectionContainer" id="whatwhedoleft"  >
        <SectionHeader
          title="THIS IS WHAT DO WE DO"
          subDescription="We overcome business obstacles. You set the goal(s), we put a team together, define a strategy and get things done. "
        />
        <h2 style={{fontSize:'1.8em', marginTop:'25px'}}>COME AGAIN?</h2>
        <p style={{width:'75%', fontSize:'1.5rem'}}>
          We are all about diversity. Want to increase sales? Reduce churn?
          Rebrand your business? Optimize & automate internal processes? Or find
          the best way to outrun your competitors?{" "}
        </p>
     
      {/* <button className="button showTablet" onClick={()=>{props.fullpageApi.moveTo(2,1)}}>See how we do it</button> */}

      </div>
      <div className="slide hideMobile" id="whatwhedoright">
        <div className="sectionContainer" id="timelinesection">
        
      
          <SectionHeader
            title="THIS IS HOW WE DO IT"
            subDescription="Tackling business challenges, we follow these steps: "
          />

          <div className="timelinescroller" id="timeline"> 
          
              <section class="timeline" id="timeline" >
                  {query.allWordpressWpWorkingsteps.edges.map((step, index) => {
                    return <TimeLineItem step={step.node} index={index} />
                  })}
              </section>
            </div>
        </div>
      </div>
    </div>

<div className="sectionContainer showMobile" id="timelinesection">

        
        
<SectionHeader
  title="THIS IS HOW WE DO IT"
  subDescription="Tackling business challenges, we follow these steps: "
/>

<div className="timelinescroller " id="timelinescroller"> 

    <section class="timeline" id="timeline">
        {query.allWordpressWpWorkingsteps.edges.map((step, index) => {
          return <TimeLineItem step={step.node} index={index} />
        })}
    </section>
  </div>
</div>
</React.Fragment>
  )
}

export default WhatWeDoSection
