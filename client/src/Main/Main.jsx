import React from "react";
import Card from "./Card/Card"
import './Main.css'

const Main = (props) => {



  return <main>
      <Card cardInfo = {props}/>
  </main>;
};

export default Main;
