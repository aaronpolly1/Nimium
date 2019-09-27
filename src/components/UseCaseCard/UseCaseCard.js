import React from "react";
import './UseCaseCard.css';
import { Link } from "gatsby";


const UseCaseCard = props => {

 const { previousCase, nextCase } = props;

  return (
    <div className="case">
      <div className="caseHeader">
        <h3>{props.case.acf.name}</h3>
        <p>{props.case.acf.function}</p>
        <img src={props.case.acf.main_image.url}></img>
      </div>
      <div className="caseDescription">
      <p>{props.case.acf.summary}</p>
      <Link
      to={"/usecases/" +props.case.wordpress_id}>Read More</Link>  
      </div>
    </div>
  );
};

export default UseCaseCard;
