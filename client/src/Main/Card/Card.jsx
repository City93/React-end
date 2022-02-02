import React from "react";
import "./Card.css"

const Card = () => {
  return <div className="card">
  <div className="card-main">
    <span className="page">1</span>
    <p>Cautious Steps</p>
    <img className="cardImage" src="https://static.wixstatic.com/media/5e64d2_014e3ebc2e104ec79dc74f8c1ec7228d~mv2.png/v1/fit/w_2500,h_1330,al_c/5e64d2_014e3ebc2e104ec79dc74f8c1ec7228d~mv2.png"/>
    <div className="containerText">
      <p className="cardText">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    </div>
    <div className="cardAction">
      <a href="/">
          <p>
            Revela carta 2
          </p>
      </a>
    </div>
  </div>
};

export default Card;
