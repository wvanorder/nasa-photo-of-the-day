import React, { useState, useEffect } from "react";
import "./App.css";
import styled from 'styled-components';
import axios from 'axios';

import Left from './left';
import Right from './right';
import Middlez from './middle';


const Column = styled.div`
width: 20%;
display: flex;
flex-flow: column nowrap;
height: 100vh;
background-color: tomato;
`

const Middle = styled.div`
width: 60%;
display: flex;
flex-flow: column nowrap;
height: 100vh;
background-color: mediumaquamarine;
align-items: center;
`





function App() {


  const [isLoaded, changeIsLoaded] = useState(false);
  const [picture, setPicture] = useState('');
  const [chosenDate, chooseDate] = useState('');

  useEffect( () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=bZMjIr0L3q76n9nowDFw6zwmwr1cHtoeaQv3PyrX${chosenDate ? `&date=${chosenDate}`: ''}`)
      .then( res => res.json())
      .then(res => {
        console.log(res);
        setPicture(res);
      })
  }, [chosenDate]);

  return (
    <div className="title">
      <h1> Hello, space adventurer!</h1>
      <div className="App">
        <Column>
          <Left date={picture.date}/>
        </Column>
        <Middle>
          <h1>Pictures</h1>
          { isLoaded? <Middlez picture={picture.url} setPicture={setPicture} description={picture.explanation}/> : <h3>Click below to load the picture!</h3>}
          <button onClick={() => {changeIsLoaded(!isLoaded)}}>Click to Load or unload picture</button>
        </Middle>
        <Column>
          <Right chosenDate={chosenDate} chooseDate={chooseDate}/>
        </Column>
        
      </div>
    </div>
    
  );
}

export default App;
