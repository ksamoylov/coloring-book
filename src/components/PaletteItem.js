import React from "react";
import './PaletteItem.css';

export default class PaletteItem extends React.Component {
  render() {
    const className = this.props.color === this.props.currentColor
      ? 'palette-item palette-item-active'
      : 'palette-item';

    return (
      <div
        className={className}
        style={{backgroundColor: this.props.color}}
        onClick={() => this.props.onChangeColor(this.props.color)}
      />
    )
  }
}
