import './App.css';
import {useState} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import MonaLisa from "./components/books/MonaLisa";
import Flower from "./components/books/Flower";
import Train from "./components/books/Train";
import Nav from "./components/Nav";
import {translations} from "./utils/LocalizedStrings";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Book from "./components/Book";
import Tracery from "./components/books/Tracery";

const defaultColor = '#9FFF28';

function App() {
  const [chosenColor, setChosenColor] = useState(defaultColor);
  const [lang, setLang] = useState(translations.getLanguage());

  const fillColor = e => {
    e.target.style.fill = chosenColor;
  }

  const changeLang = lang => {
    translations.setLanguage(lang);
    setLang(lang);
  }

  const changeColor = color => {
    setChosenColor(color);
  }

  return (
    <div className="App">
      <Nav/>
      <LanguageSwitcher onChangeLang={changeLang} lang={lang}/>
      <div className="container">
        <Routes>
          <Route path="/"/>
          <Route path="/mona-lisa/" element={
            <Book
              chosenColor={chosenColor}
              onChangeColor={changeColor}
              component={
                <MonaLisa onFill={fillColor}/>}
            />}
          />
          <Route path="/train/" element={
            <Book
              chosenColor={chosenColor}
              onChangeColor={changeColor}
              component={
                <Train onFill={fillColor}/>}
            />}
          />
          <Route path="/tracery/" element={
            <Book
              chosenColor={chosenColor}
              onChangeColor={changeColor}
              component={
                <Tracery onFill={fillColor}/>}
            />}
          />
          <Route path="/flower/" element={
            <Book
              chosenColor={chosenColor}
              onChangeColor={changeColor}
              component={
                <Flower onFill={fillColor}/>}
            />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
