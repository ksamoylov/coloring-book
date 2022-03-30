import './App.css';
import {useState} from "react";
import Palette from "./components/Palette";
import MonaLisa from "./components/books/MonaLisa";

const defaultColor = '#166035';

const colors = [
  '#166035', '#45C063', '#9FFF28',
  '#FC8A34', '#F6BA0F', '#FEFF24',
  '#B4042D', '#FC3646', '#E86B6C',
  '#390070', '#9D00ED', '#F600B0',
  '#0E007C', '#0E00FD', '#1B81C5',
  '#381304', '#845F44', '#C4965B',
];

function App() {
  const [chosenColor, setChosenColor] = useState(defaultColor);

  const fillColor = e => {
    e.target.style.fill = chosenColor;
  }

  return (
    <div className="App">
      <div className="container">
        <MonaLisa onFill={fillColor}/>
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
