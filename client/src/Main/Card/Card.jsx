import React from "react";
import "./Card.css"
import { Markup } from "interweave";

const Card = (props) => {

  
  const cardInfo = props.cardInfo.cardInfo
  console.log(cardInfo.move)
  const page = cardInfo.move

  const handleChange = (page) =>{
    props.handleChange(page)
  }

  return <div className="card">
  <div className="card-main">
    <span className="page">{cardInfo.id}</span>
    <p>{cardInfo.title}</p>
    <img className="cardImage" src={cardInfo.img}/>
    <div className="containerText">
      <p className="cardText">{cardInfo.text}</p>
    </div>
    </div>
    <div className="cardAction" >
{page?<button onClick={()=>{handleChange(page)}}>
    <Markup content={cardInfo.options}/>
    </button>:<></>}
    
    </div>
  </div>
};

export default Card;
