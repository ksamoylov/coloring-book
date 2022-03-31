import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <h1 className="nav-header">Coloring Book</h1>
        <nav>
          <Link to="/mona-lisa">Mona Lisa</Link>
          <Link to="/train">Train</Link>
          <Link to="/tracery">Tracery</Link>
          <Link to="/flower">Flower</Link>
        </nav>
      </div>
    );
  }
}
