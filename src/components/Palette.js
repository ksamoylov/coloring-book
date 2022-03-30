import React from "react";
import PaletteItem from "./PaletteItem";
import "./Palette.css";

export default class Palette extends React.Component {
  render() {
    const paletteItems = this.props.colors.map(color => {
      return <PaletteItem
        key={color}
        currentColor={this.props.currentColor}
        color={color}
        onChangeColor={this.props.onChangeColor}
      />
    });

    return <div className="palette">
      {paletteItems}
    </div>;
  }
}
