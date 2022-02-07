import './App.css';

import React, {useEffect, useState} from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import axios from 'axios'

const App = () => {

  const [cardInfo, changeCardInfo] = useState([])
  const [page, changePage] = useState("1")

  useEffect(() =>{
    const getData = async () =>{
      try{
        const data = await axios.get(`http://www.localhost:3000/game?page=${page}`)
        const cardInfo = {
          id: data.data[0].id,
          img: data.data[0].img,
          options: data.data[0].options,
          title: data.data[0].title,
          text: data.data[0].text,
          function: data.data[0].function,
          page: data.data[0].page,
          move: data.data[0].move
      }
        return cardInfo
      }
      catch (err){
        alert(err)
      }
    } 
    getData().then((cardInfo)=>changeCardInfo(cardInfo))

  }, [page])

  const handleChange = (page) =>{
    changePage(page)
  }


  return (
    <div className="App">
        <Header/>
        <Main cardInfo={cardInfo} handleChange={handleChange}/>
        <Footer/>
    </div>
  );
}

export default App;
