import './App.css';
import {useState} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Palette from "./components/Palette";
import MonaLisa from "./components/books/MonaLisa";
import Flower from "./components/books/Flower";
import Tracery from "./components/books/Tracery";
import Train from "./components/books/Train";
import Nav from "./components/Nav";

const defaultColor = '#166035';

const colors = [
  '#9FFF28', '#45C063', '#166035',
  '#FEFF24', '#F6BA0F', '#FC8A34',
  '#E86B6C', '#FC3646', '#B4042D',
  '#F600B0', '#9D00ED', '#390070',
  '#69F8FF', '#0E00FD', '#0E007C',
  '#C4965B', '#845F44', '#381304',
  '#ffffff', '#aaaaaa', '#000000',
];

function App() {
  const [chosenColor, setChosenColor] = useState(defaultColor);

  const fillColor = e => {
    e.target.style.fill = chosenColor;
  }

  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="/mona-lisa/" element={
            <MonaLisa onFill={fillColor}/>
          }/>
          <Route path="/flower/" element={
            <Flower onFill={fillColor}/>
          }/>
          <Route path="/tracery/" element={
            <Tracery onFill={fillColor}/>
          }/>
          <Route path="/train/" element={
            <Train onFill={fillColor}/>
          }/>
        </Routes>
        <Palette
          colors={colors}
          currentColor={chosenColor}
          onChangeColor={color => setChosenColor(color)}
        />
      </div>
    </div>
  );
}

export default App;
