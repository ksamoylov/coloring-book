import React from "react";
import Palette from "./Palette";

const colors = [
  '#9FFF28', '#45C063', '#166035',
  '#FEFF24', '#F6BA0F', '#FC8A34',
  '#E86B6C', '#FC3646', '#B4042D',
  '#F600B0', '#9D00ED', '#390070',
  '#69F8FF', '#0E00FD', '#0E007C',
  '#C4965B', '#845F44', '#381304',
  '#ffffff', '#aaaaaa', '#000000',
];

const smallResolution = 567;

export default class Book extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isPaletteBtnActive: false,

    };
  }

  render() {
    const {width} = window.screen;

    const bookStyle = {display: this.state.isPaletteBtnActive && width < smallResolution ? 'none' : 'block'};
    const paletteStyle = {display: this.state.isPaletteBtnActive || width > smallResolution ? 'flex' : 'none'};

    const changePaletteBtnActivity = () => {
      if (this.state.isPaletteBtnActive) {
        this.setState({isPaletteBtnActive: false});
      } else {
        this.setState({isPaletteBtnActive: true});
      }
    }

    return (
      <div>
        <div className="palette-btn" style={{background: this.props.chosenColor}} onClick={changePaletteBtnActivity}/>
        <div className="book">
          <div className="book-item" style={bookStyle}>
            {this.props.component}
          </div>
          <Palette
            style={paletteStyle}
            colors={colors}
            currentColor={this.props.chosenColor}
            onChangeColor={this.props.onChangeColor}
          />
        </div>
      </div>
    );
  }
}
