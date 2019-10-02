import React from "react";
import './UseCaseCard.css';
import { Link } from "gatsby";
import { Textfit } from 'react-textfit';

const UseCaseCard = props => {

 const { previousCase, nextCase } = props;

  return (
    <div className="case">
      <div className="caseHeader">
        <Textfit mode="single">
        <h3>{props.case.acf.name}</h3>

        </Textfit>
        <Textfit mode="single">

          
        <p>{props.case.acf.function}</p>
</Textfit>
     
        <img src={props.case.acf.main_image.source_url}></img>
      </div>
      <div className="caseDescription">
      
      <Textfit mode="multi" >
      {props.case.acf.summary}
      </Textfit>
     
   
      <Link
      to={"/usecases/" +props.case.wordpress_id}>Read More</Link>  
      </div>
    </div>
  );
};

export default UseCaseCard;
