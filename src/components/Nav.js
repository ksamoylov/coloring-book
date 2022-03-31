import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {translations} from "../utils/LocalizedStrings";

const resolution = 1365;

export default class Nav extends React.Component {
  render() {
    const {width} = window.screen;

    return (
      <div id="nav">
        <h1 className="nav-header">{translations.getString('coloring_book')}</h1>
        <nav>
          <Link to="/mona-lisa">{translations.mona_lisa}</Link>
          <Link to="/train">{translations.train}</Link>
          <Link to="/tracery">{translations.tracery}</Link>
          {width > resolution ? <Link to="/flower">{translations.flower}</Link> : ''}
        </nav>
      </div>
    );
  }
}
