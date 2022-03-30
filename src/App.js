import './App.css';
import {useState} from "react";
import Palette from "./components/Palette";
import SecondFlower from "./components/books/SecondFlower";

const defaultColor = '#e7e732';
const colors = ['#e7e732', '#ee5456', '#011c6a', '#0f51d1', '#33FF54',];

function App() {
  const [chosenColor, setChosenColor] = useState(defaultColor);

  const fillColor = e => {
    e.target.style.fill = chosenColor;
  }

  return (
    <div className="App">
      <div className="container">
        <Palette
          colors={colors}
          currentColor={chosenColor}
          onChangeColor={(color) => {
            setChosenColor(color);
          }
        }/>

        <SecondFlower onFill={fillColor}/>
      </div>
    </div>
  );
}

export default App;
