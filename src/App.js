import './App.css';
import Flower from "./components/Flower";
import {useState} from "react";
import Palette from "./components/Palette";

const defaultColor = '#e7e732';
const colors = ['#e7e732', '#ee5456', '#011c6a', '#0f51d1', '#33FF54',];

function App() {
  const [chosenColor, setChosenColor] = useState(defaultColor);

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
        <Flower
          onFill={(e) => {
            colors[e.target.id] = chosenColor;
            e.target.style.fill = chosenColor;
          }}
        />
      </div>
    </div>
  );
}

export default App;
