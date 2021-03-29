import logo from './logo.svg';
import { Button } from './component/Button.js';
import { Toppic } from './component/Toppic.js';
import image from './image/jan18.jpg';
import styled from 'styled-components';
import Detail from './component/Detail';
import { Container } from 'reactstrap'; 

const ImageResize = styled.img`
  width: 1100px;
  height: 500px;
  border-radius: 0.7cm;
`;

const ImageCenter = styled.div` 
  text-align: center;
  margin-top: 3em;
`;

function App() {
  return (
    <div className="App">
      <Button/>
      <div>
        <Toppic/>
        <div>
        <ImageCenter>
            <ImageResize src = {image} alt = "picture"/>
        </ImageCenter>
          <div className = "container">
            <Detail name = "Hello"/>
            <hr/>
            <Detail name = "Hi"/>
            <hr/>
            <Detail name = "Hey"/>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
