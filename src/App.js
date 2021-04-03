import Button from './component/Button.js';
import Toppic from './component/Toppic.js';
import image from './image/jan18.jpg';
import styled from 'styled-components';
import Detail from './component/Detail';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './component/About.js';

const ImageResize = styled.img`
  width: 1100px;
  height: 500px;
  border-radius: 0.7cm;
`;

const ImageCenter = styled.div` 
  text-align: center;
  margin-top: 3em;
`;

// const About = () => <h1>About</h1>

function App() {
  return (
    <Router>

      <Route exact path="/">
        <div className="App">
          <Button />
          <div>
            <Toppic top="Funny of my work :(" />
            <div>
              <ImageCenter>
                <ImageResize src={image} alt="picture" />
              </ImageCenter>
              <div className="container">
                <a href='https://www.google.com/' target="_blank">
                  <Detail name="Hello" />
                </a>
                <Link to="/about"><Detail name="Hi" /></Link>
                <Detail name="boutme" />
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route path="/about"><About /></Route>
    </Router>
  );
}

export default App;
