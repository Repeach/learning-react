import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import Detail from './Detail'
import Toppic from './Toppic'
import image from '../image/jan18.jpg'

const ImageResize = styled.img`
  width: 1100px;
  height: 500px;
  border-radius: 0.7cm;
`;

const ImageCenter = styled.div` 
  text-align: center;
  margin-top: 3em;
`;

export default function About() {
    return (
      <div className = "App">
      <Button />
      <div>
        <Toppic top = "common" />
        <div>
          <ImageCenter>
            <ImageResize src = {image} alt = "picture" />
          </ImageCenter>
          <div className = "container">
            <Detail name = "Yo" />       
            <Detail name = "Sup" />      
            <Detail name = "Hola" />    
          </div>
        </div>
      </div>
    </div>
    )
}