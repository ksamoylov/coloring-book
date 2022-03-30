import React from "react";

export default class Train extends React.Component {
  render() {
    const css = '.st0{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st1{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st2{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st3{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st4{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st5{fill:#FFFFFF;stroke:#000000;stroke-width:0.75;stroke-miterlimit:10;}\n' +
      '  .st6{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st7{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st8{fill:#FFFFFF;stroke:#000000;stroke-width:0.75;stroke-miterlimit:10;}\n' +
      '  .st9{fill:#FFFFFF;stroke:#000000;stroke-width:0.75;stroke-miterlimit:10;}\n' +
      '  .st10{fill:#FFFFFF;stroke:#000000;stroke-width:0.75;stroke-miterlimit:10;}\n' +
      '  .st11{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st12{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st13{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st14{opacity:0.6;fill:#E5ECED;stroke:#000000;stroke-width:2;stroke-miterlimit:10;enable-background:new    ;}\n' +
      '  .st15{fill:#FFFFFF;}\n' +
      '  .st16{fill:#FFFFFF;stroke:#000000;stroke-width:0.75;stroke-miterlimit:10;}\n' +
      '  .st17{opacity:0.5;}\n' +
      '  .st18{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st19{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st20{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st21{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st22{fill:#FFFFFF;stroke:#000000;stroke-width:1;stroke-miterlimit:10;}\n' +
      '  .st23{fill:#FFFFFF;stroke:#000000;stroke-width:0.75;stroke-miterlimit:10;}\n' +
      '  .st24{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}\n' +
      '  .st25{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st26{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st27{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st28{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st29{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st30{fill:#FFFFFF;stroke:#020202;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st31{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n' +
      '  .st32{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}';

    return (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="700"
           viewBox="0 0 512 512">
        <style type="text/css">{css}</style>
        <rect onClick={e => this.props.onFill(e)} x="0.2" y="0.5" className="st0" width="512" height="512"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M115.7,188.8L115.7,188.8c-1.9,0-3.4-1.5-3.4-3.4v-43c0-1.9,1.5-3.4,3.4-3.4h0c1.9,0,3.4,1.5,3.4,3.4v43
	C119.1,187.3,117.6,188.8,115.7,188.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M203.9,107.8L203.9,107.8c0,1.9-1.5,3.4-3.4,3.4H158c-1.9,0-3.4-1.5-3.4-3.4v0c0-1.9,1.5-3.4,3.4-3.4h42.5
	C202.4,104.4,203.9,105.9,203.9,107.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M159.1,178.8L159.1,178.8c-1.6,0.9-3.7,0.4-4.7-1.3l-21.3-37.2c-0.9-1.6-0.4-3.8,1.2-4.7l0,0
	c1.6-0.9,3.7-0.4,4.7,1.3l21.3,37.2C161.3,175.8,160.7,177.9,159.1,178.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M191.7,148.6L191.7,148.6c-0.9,1.6-3,2.2-4.7,1.3l-36.9-21.5c-1.6-0.9-2.2-3.1-1.2-4.7v0c0.9-1.6,3-2.2,4.7-1.3
	l36.9,21.5C192,144.8,192.6,146.9,191.7,148.6z"/>
        <path onClick={e => this.props.onFill(e)} className="st2" d="M73.2,178.8L73.2,178.8c-1.6-0.9-2.2-3.1-1.2-4.7l21.3-37.2c0.9-1.6,3-2.2,4.7-1.3l0,0c1.6,0.9,2.2,3.1,1.2,4.7
	l-21.3,37.2C77,179.2,74.9,179.8,73.2,178.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st3" d="M27.5,107.8L27.5,107.8c0-1.9,1.5-3.4,3.4-3.4h42.5c1.9,0,3.4,1.5,3.4,3.4v0c0,1.9-1.5,3.4-3.4,3.4H30.9
	C29.1,111.3,27.5,109.7,27.5,107.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st4" d="M39.9,149.8L39.9,149.8c-0.9-1.6-0.4-3.8,1.2-4.7l36.9-21.5c1.6-0.9,3.7-0.4,4.7,1.3v0c0.9,1.6,0.4,3.8-1.2,4.7
	L44.6,151C43,152,40.9,151.4,39.9,149.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M115.7,76.7L115.7,76.7c-1.9,0-3.4-1.5-3.4-3.4v-43c0-1.9,1.5-3.4,3.4-3.4h0c1.9,0,3.4,1.5,3.4,3.4v43
	C119.1,75.1,117.6,76.7,115.7,76.7z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M133.9,79.7L133.9,79.7c-1.6-0.9-2.2-3.1-1.2-4.7L154,37.8c0.9-1.6,3-2.2,4.7-1.3v0c1.6,0.9,2.2,3.1,1.2,4.7
	l-21.3,37.2C137.6,80.1,135.5,80.6,133.9,79.7z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M148.1,90.8L148.1,90.8c-0.9-1.6-0.4-3.8,1.2-4.7l36.9-21.5c1.6-0.9,3.7-0.4,4.7,1.3l0,0
	c0.9,1.6,0.4,3.8-1.2,4.7L152.8,92C151.1,93,149.1,92.4,148.1,90.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M98.4,79.7L98.4,79.7c-1.6,0.9-3.7,0.4-4.7-1.3L72.5,41.2c-0.9-1.6-0.4-3.8,1.2-4.7l0,0
	c1.6-0.9,3.7-0.4,4.7,1.3L99.7,75C100.6,76.6,100,78.8,98.4,79.7z"/>
        <path onClick={e => this.props.onFill(e)} className="st1" d="M83.1,90.8L83.1,90.8c-0.9,1.6-3,2.2-4.7,1.3L41.5,70.5c-1.6-0.9-2.2-3.1-1.2-4.7l0,0c0.9-1.6,3-2.2,4.7-1.3
	l36.9,21.5C83.5,87,84,89.1,83.1,90.8z"/>
        <ellipse onClick={e => this.props.onFill(e)} className="st1" cx="114.5" cy="107.8" rx="44.3" ry="34.6"/>
        <path onClick={e => this.props.onFill(e)} className="st5"
              d="M-114.3,447.4c-3.7-0.8-4.6-3.6-4.7-6.7l-0.8-29.1l354.8-7l1,35.9l-349.8,6.9L-114.3,447.4z"/>
        <path onClick={e => this.props.onFill(e)} className="st6"
              d="M-119,440.7l-0.6-21.5l354.8-7l0.6,21.8l-354.8,7L-119,440.7z"/>
        <path onClick={e => this.props.onFill(e)} className="st7" d="M184,437.3c0,2.3,0.8,4.5,2.3,6.4c1.4,1.9,3.5,3.4,5.8,4.2c2.3,0.8,4.9,1,7.4,0.6c2.5-0.5,4.7-1.6,6.4-3.3
	c1.7-1.6,2.9-3.7,3.3-6c0.4-2.3,0.1-4.6-0.9-6.7c-1-2.1-2.7-3.9-4.8-5.1c-2.1-1.2-4.6-1.9-7.1-1.8c-3.3,0.1-6.5,1.3-8.8,3.5
	C185.2,431.3,183.9,434.3,184,437.3z"/>
        <path onClick={e => this.props.onFill(e)} className="st8" d="M184,437.3c0,2.3,0.8,4.5,2.3,6.4c1.4,1.9,3.5,3.4,5.8,4.2c2.3,0.8,4.9,1,7.4,0.6c2.5-0.5,4.7-1.6,6.4-3.3
	c1.7-1.6,2.9-3.7,3.3-6c0.4-2.3,0.1-4.6-0.9-6.7c-1-2.1-2.7-3.9-4.8-5.1c-2.1-1.2-4.6-1.9-7.1-1.8c-3.3,0.1-6.5,1.3-8.8,3.5
	C185.2,431.3,183.9,434.3,184,437.3z"/>
        <path onClick={e => this.props.onFill(e)} className="st9" d="M188.1,437.3c0,1.6,0.6,3.1,1.6,4.4c1,1.3,2.4,2.3,3.9,2.8c1.6,0.6,3.3,0.7,5,0.4c1.7-0.3,3.2-1.1,4.4-2.2
	c1.2-1.1,2-2.5,2.3-4.1c0.3-1.5,0.1-3.1-0.6-4.5c-0.7-1.4-1.8-2.6-3.3-3.5c-1.4-0.8-3.1-1.3-4.8-1.2c-2.3,0-4.4,0.9-6,2.4
	C188.9,433.2,188,435.2,188.1,437.3z"/>
        <path onClick={e => this.props.onFill(e)} className="st8" d="M191.5,436.9c0,0.9,0.4,1.8,0.9,2.6s1.4,1.4,2.4,1.7c1,0.3,2,0.4,3,0.2c1-0.2,1.9-0.7,2.6-1.3
	c0.7-0.7,1.2-1.5,1.4-2.5c0.2-0.9,0-1.9-0.4-2.7c-0.4-0.9-1.1-1.6-2-2.1c-0.9-0.5-1.9-0.8-2.9-0.7c-1.4,0-2.7,0.6-3.6,1.5
	C192,434.5,191.5,435.7,191.5,436.9z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M193.3,434.6c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.2,0.1,0.4,0c0.1,0,0.2-0.1,0.3-0.2
	c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0-0.2,0-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.2,0-0.3,0.1-0.4,0.2
	C193.3,434.3,193.3,434.4,193.3,434.6z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M195.9,433.7c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.2,0.1,0.4,0c0.1,0,0.2-0.1,0.3-0.2
	s0.1-0.2,0.2-0.3c0-0.1,0-0.2,0-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1c-0.2,0-0.3,0.1-0.4,0.2
	C196,433.4,195.9,433.5,195.9,433.7z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M198.7,434.6c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
	c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.4,0.2C198.7,434.3,198.7,434.4,198.7,434.6z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M193.4,439.7c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2-0.1,0.4,0c0.1,0,0.2,0.1,0.3,0.2
	c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.1-0.4,0.1c-0.2,0-0.3-0.1-0.5-0.2
	C193.5,440,193.4,439.9,193.4,439.7z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M192.1,437.3c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
	c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.5,0.2c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2
	C192.1,437.4,192.1,437.3,192.1,437.3z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M200,437.1c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
	c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2C200.1,437.4,200,437.3,200,437.1z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M196.1,440.5c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
	c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2C196.2,440.8,196.1,440.6,196.1,440.5z"/>
        <path onClick={e => this.props.onFill(e)} className="st10" d="M198.8,439.5c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2-0.1,0.4,0c0.1,0,0.2,0.1,0.3,0.2
	c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.2,0.3s-0.2,0.1-0.4,0.1c-0.2,0-0.3-0.1-0.5-0.2
	C198.9,439.8,198.8,439.6,198.8,439.5z"/>
        <path onClick={e => this.props.onFill(e)} className="st7" d="M137.7,438.3c0,2.3,0.8,4.5,2.3,6.4c1.4,1.9,3.4,3.4,5.8,4.2c2.3,0.8,4.9,1,7.4,0.6c2.5-0.5,4.7-1.6,6.4-3.3
	c1.7-1.6,2.9-3.7,3.3-6c0.4-2.3,0.1-4.6-0.9-6.7c-1-2.1-2.7-3.9-4.8-5.1c-2.1-1.2-4.6-1.9-7.1-1.8c-3.3,0.1-6.5,1.3-8.8,3.5
	C138.9,432.3,137.6,435.2,137.7,438.3z"/>
        <g>
          <path onClick={e => this.props.onFill(e)} className="st8" d="M137.7,438.3c0,2.3,0.8,4.5,2.3,6.4c1.4,1.9,3.4,3.4,5.8,4.2c2.3,0.8,4.9,1,7.4,0.6c2.5-0.5,4.7-1.6,6.4-3.3
		c1.7-1.6,2.9-3.7,3.3-6c0.4-2.3,0.1-4.6-0.9-6.7c-1-2.1-2.7-3.9-4.8-5.1c-2.1-1.2-4.6-1.9-7.1-1.8c-3.3,0.1-6.5,1.3-8.8,3.5
		C138.9,432.3,137.6,435.2,137.7,438.3z"/>
          <path onClick={e => this.props.onFill(e)} className="st9" d="M141.8,438.2c0,1.5,0.6,3.1,1.6,4.3c1,1.3,2.3,2.2,3.9,2.8c1.6,0.6,3.3,0.7,5,0.3c1.7-0.3,3.2-1.1,4.3-2.2
		c1.2-1.1,1.9-2.5,2.2-4.1c0.3-1.5,0.1-3.1-0.6-4.5s-1.8-2.6-3.3-3.5c-1.4-0.8-3.1-1.3-4.8-1.2c-2.3,0.1-4.4,0.9-6,2.4
		C142.6,434.1,141.8,436.1,141.8,438.2z"/>
          <path onClick={e => this.props.onFill(e)} className="st8" d="M145.2,437.8c0,0.9,0.4,1.8,1,2.6c0.6,0.8,1.4,1.3,2.4,1.7c1,0.3,2,0.4,3,0.2c1-0.2,1.9-0.7,2.6-1.3
		c0.7-0.7,1.2-1.5,1.3-2.4c0.2-0.9,0-1.9-0.4-2.7c-0.4-0.8-1.1-1.6-2-2.1c-0.9-0.5-1.9-0.8-2.9-0.7c-0.7,0-1.3,0.1-2,0.4
		c-0.6,0.3-1.2,0.6-1.6,1.1c-0.5,0.4-0.8,1-1.1,1.6C145.3,436.6,145.2,437.2,145.2,437.8z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M147,435.5c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
		c0-0.2-0.1-0.3-0.2-0.4s-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.5,0.2C147,435.2,147,435.3,147,435.5z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M149.6,434.6c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
		c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.4,0.2C149.7,434.3,149.6,434.4,149.6,434.6z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M152.4,435.5c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
		c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1
		c-0.1,0-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.1,0.3C152.3,435.3,152.3,435.4,152.4,435.5z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M147.1,440.6c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2C147.2,440.9,147.1,440.8,147.1,440.6z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M145.8,438.2c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2S145.8,438.3,145.8,438.2z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M153.7,438c0-0.2,0.1-0.3,0.2-0.4s0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2S153.7,438.2,153.7,438z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M149.8,441.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.3-0.1-0.4-0.2C149.9,441.7,149.8,441.6,149.8,441.4z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M152.5,440.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2C152.6,440.7,152.5,440.6,152.5,440.4z"/>
        </g>
        <path onClick={e => this.props.onFill(e)} className="st11" d="M360.5,427c0,0-29.6-44-58.8-72.2c-29.2-28.2-104.3-28.1-104.3-28.1l-57.5,1.1l-241.8,3.8
	c-5.1,0.6-10,2.5-13.9,5.6c-2.6,2.3-4.5,5.1-5.7,8.2c-0.3,2-0.6,4.1-0.7,6.1l2.4,83.7l340.1-6.7l6.3,17l113.9-2.2
	C369.6,442.6,360.5,427,360.5,427z"/>
        <path onClick={e => this.props.onFill(e)} className="st12" d="M-115,344.3c4.3-2.2,9-3.5,13.9-3.9l240.5-4.2l57.2-1.1c0,0,66.1-0.5,96.5,13.8l-414.5,8.3l-0.1-3.6
	c0.1-1.4,0.4-2.7,0.7-4C-119.3,347.4-117.4,345.6-115,344.3z"/>
        <path onClick={e => this.props.onFill(e)} className="st12" d="M360.5,427c0,0-14.3-21.2-32.8-43.6l-448.8,8.8l1.2,42.9l340.1-6.7l6.3,17l113.9-2.2
	C369.6,442.6,360.5,427,360.5,427z"/>
        <path onClick={e => this.props.onFill(e)} className="st13" d="M255,361.5l52-1.1c11.4,12.2,21.2,24.9,30.5,36.5l-73.2-6.8c-7.9-0.6-8.7-4.9-8.7-4.9l-7.6-20.7
	C248.3,360.9,255,361.5,255,361.5z"/>
        <path onClick={e => this.props.onFill(e)} className="st15" d="M345.7,418.2c0.7,1.8,2.3,2.9,3.5,2.5c1.2-0.4,1.7-2.2,0.9-4c-0.7-1.8-2.3-2.9-3.5-2.5
	S344.9,416.4,345.7,418.2z"/>
        <path onClick={e => this.props.onFill(e)} className="st16" d="M242.8,411.2l-12,0.2c0.3,0.8,0.8,1.6,1.6,2.1c1.3,1,7.2,0.3,7.2,0.3s2.7-0.1,3.5-0.8
	C243.9,412.3,243.8,411.2,242.8,411.2z"/>
        <g className="st17">
          <path onClick={e => this.props.onFill(e)} className="st16" d="M242.6,411.7l-8,0.2c0.2,0.6,0.6,1.1,1.1,1.4c0.9,0.6,4.8,0.2,4.8,0.2s1.8,0,2.3-0.6
		C243.3,412.3,243.3,411.7,242.6,411.7z"/>
        </g>
        <path onClick={e => this.props.onFill(e)} className="st13" d="M104.4,390.3c0,0.3,0,0.6,0.1,0.8c0.1,0.3,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0.2,0.9,0.2
	l120.5-2.4c0.3,0,0.6-0.1,0.9-0.3c0.3-0.1,0.5-0.3,0.7-0.5c0.2-0.2,0.3-0.5,0.4-0.7c0.1-0.3,0.1-0.6,0.1-0.8l-4.5-18.7
	c0-0.3,0-0.6-0.1-0.8c-0.1-0.3-0.2-0.5-0.4-0.7c-0.2-0.2-0.4-0.4-0.7-0.5c-0.3-0.1-0.6-0.2-0.9-0.2l-116.5,2.3
	c-0.3,0-0.6,0.1-0.9,0.3c-0.3,0.1-0.5,0.3-0.7,0.5c-0.2,0.2-0.3,0.5-0.4,0.7c-0.1,0.3-0.1,0.6-0.1,0.8L104.4,390.3z"/>
        <path onClick={e => this.props.onFill(e)} className="st18" d="M105.3,389.5c0,0.3,0,0.5,0.1,0.8c0.1,0.2,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.5,0.2,0.8,0.2
	l119.1-2.3c0.6-0.1,1.1-0.3,1.4-0.7c0.3-0.4,0.5-0.9,0.4-1.4l-4.5-17.1c0-0.5-0.1-1-0.5-1.4c-0.4-0.4-0.9-0.6-1.4-0.7l-115.1,2.3
	c-0.3,0-0.5,0.1-0.8,0.2c-0.2,0.1-0.5,0.3-0.6,0.5s-0.3,0.4-0.4,0.7c-0.1,0.2-0.1,0.5-0.1,0.8L105.3,389.5z"/>
        <path onClick={e => this.props.onFill(e)} className="st19" d="M87.9,366.1l-35.5,0.7c-2.5,0-4.4,1.9-4.4,4.2l1.4,50c0.1,2.3,2.1,4,4.6,4l35.5-0.7c2.5,0,4.4-1.9,4.4-4.2
	l-1.4-50C92.4,367.8,90.3,366,87.9,366.1z"/>
        <path onClick={e => this.props.onFill(e)} className="st18" d="M71.8,373l-3,0.1c-5.2,0.1-9.3,4-9.1,8.7l0.2,7.9c0.1,4.7,4.4,8.5,9.6,8.4l3-0.1c5.2-0.1,9.3-4,9.1-8.7
	l-0.2-7.9C81.3,376.7,77,372.9,71.8,373z"/>
        <path onClick={e => this.props.onFill(e)} className="st20" d="M316.3,370.2c-4,0.7-7.7,2.5-10.6,5.1c-5-3.4-11-5.1-17.1-4.9c-13.1,0.3-23.5,7.9-23.2,17.6c0,0.4,0,0.9,0,1.3
	c0.2,0,0.5,0,0.7,0l70.9,6.6c0-0.1,0-0.2,0-0.3C330.5,387.6,323.7,378.9,316.3,370.2z"/>
        <path onClick={e => this.props.onFill(e)} className="st21" d="M285.4,385.4c2.5,0,4.4-1.9,4.4-4.2c-0.1-2.3-2.1-4-4.6-4c-2.5,0-4.4,1.9-4.4,4.2
	C280.9,383.7,282.9,385.4,285.4,385.4z"/>
        <path onClick={e => this.props.onFill(e)} className="st21" d="M314.6,384c1.9,0,3.5-1.5,3.4-3.3c0-1.8-1.7-3.2-3.6-3.1c-1.9,0-3.5,1.5-3.4,3.3
	C311.1,382.6,312.7,384,314.6,384z"/>
        <path onClick={e => this.props.onFill(e)} className="st22" d="M285.4,384.5c1.9,0,3.5-1.5,3.4-3.3c0-1.8-1.7-3.2-3.6-3.1c-1.9,0-3.5,1.5-3.4,3.3
	C281.8,383.2,283.4,384.6,285.4,384.5z"/>
        <path onClick={e => this.props.onFill(e)} className="st22" d="M314.6,383.2c1.5,0,2.6-1.1,2.6-2.5c0-1.3-1.3-2.4-2.7-2.4c-1.5,0-2.6,1.1-2.6,2.5
	C311.9,382.1,313.1,383.2,314.6,383.2z"/>
        <path onClick={e => this.props.onFill(e)} className="st20"
              d="M284,382.1c1.2,0,2.1-1,2.1-2.1s-1-2.1-2.2-2c-1.2,0-2.1,1-2.1,2.1C281.8,381.3,282.8,382.2,284,382.1z"/>
        <path onClick={e => this.props.onFill(e)} className="st20" d="M313.4,381.9c1.1,0,1.9-0.9,1.9-2c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,2
	C311.5,381.1,312.4,382,313.4,381.9z"/>
        <path onClick={e => this.props.onFill(e)} className="st23" d="M300.5,416.3c0.6,0.3,1.1,0.7,1.7,1c0.7,0.3,1.5,0.6,2.2,0.8c1.5,0.3,3.1,0.5,4.7,0.6c3.3,0.2,6.6-0.3,9.9-0.4
	l3.1-0.1c-1.3,0.6-2.6,1.1-4,1.5c-1.6,0.4-3.2,0.7-4.8,0.8c-3.2,0.3-6.4-0.1-9.5-1.4C302.6,418.4,301.4,417.5,300.5,416.3z"/>
        <g>
          <path onClick={e => this.props.onFill(e)} className="st24" d="M114.6,434.3c-1-2.1-2.7-3.9-4.8-5.1c-0.4-0.3-0.9-0.5-1.4-0.7l-11.3,0.2c-1.2,0.6-2.3,1.3-3.2,2.2
		c-2.3,2.2-3.6,5.1-3.5,8.2c0,2.3,0.8,4.5,2.3,6.4c1.4,1.9,3.4,3.4,5.8,4.2c2.3,0.8,4.9,1,7.4,0.6c2.5-0.5,4.7-1.6,6.4-3.3
		c1.7-1.6,2.9-3.7,3.3-6C116,438.7,115.7,436.4,114.6,434.3z"/>
          <path onClick={e => this.props.onFill(e)} className="st9" d="M94.7,439.3c0,1.5,0.6,3.1,1.6,4.3s2.3,2.2,3.9,2.8c1.6,0.6,3.3,0.7,5,0.3c1.7-0.3,3.2-1.1,4.3-2.2
		c1.2-1.1,1.9-2.5,2.2-4.1c0.3-1.5,0.1-3.1-0.6-4.5c-0.7-1.4-1.8-2.6-3.3-3.5c-1.4-0.8-3.1-1.3-4.8-1.2c-2.3,0.1-4.4,0.9-6,2.4
		C95.5,435.3,94.6,437.3,94.7,439.3z"/>
          <path onClick={e => this.props.onFill(e)} className="st8" d="M98.1,439c0,0.9,0.4,1.8,1,2.6c0.6,0.8,1.4,1.3,2.4,1.7c1,0.3,2,0.4,3,0.2c1-0.2,1.9-0.7,2.6-1.3
		c0.7-0.7,1.2-1.5,1.3-2.4c0.2-0.9,0-1.9-0.4-2.7c-0.4-0.8-1.1-1.6-2-2.1c-0.9-0.5-1.9-0.8-2.9-0.7c-0.7,0-1.3,0.1-2,0.4
		c-0.6,0.3-1.2,0.6-1.6,1.1c-0.5,0.4-0.8,1-1.1,1.6C98.2,437.8,98.1,438.4,98.1,439z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M99.8,436.7c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
		c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.5,0.2C99.9,436.4,99.8,436.5,99.8,436.7z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M102.5,435.8c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
		c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.4,0.2C102.5,435.5,102.5,435.6,102.5,435.8z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M105.2,436.7c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
		c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1
		c-0.1,0-0.2,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.1,0.3C105.2,436.5,105.2,436.6,105.2,436.7z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M100,441.8c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.5,0.2s0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2C100,442.1,100,442,100,441.8z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M98.6,439.3c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2S98.7,439.5,98.6,439.3z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M106.6,439.2c0-0.2,0.1-0.3,0.2-0.4s0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2S106.6,439.3,106.6,439.2z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M102.7,442.6c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.3-0.1-0.4-0.2C102.7,442.9,102.7,442.7,102.7,442.6z"/>
          <path onClick={e => this.props.onFill(e)} className="st10" d="M105.3,441.6c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.5,0.2s0.2,0.3,0.2,0.4
		c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.5-0.2C105.4,441.9,105.4,441.7,105.3,441.6z"/>
        </g>
        <path onClick={e => this.props.onFill(e)} className="st25"
              d="M-119.3,432.8l477-9.4l2.7,4c0,0,9.1,15.6-20,16.2l-113.8,2.2l-6.3-17l-339.6,6.7L-119.3,432.8z"/>
        <path onClick={e => this.props.onFill(e)} className="st26" d="M-143.5,514c0,0,221.5-144.3,683,0"/>
        <g>
          <path onClick={e => this.props.onFill(e)} className="st27" d="M452.5,503.9h-35.3c16.2-92.5-19.1-132.3-19.1-132.3l2.3-1.9c13.6,13.8,22,33.2,26.1,53.4
		c0,0,15.8-45.2,33.5-72.8l4.4,3.3c0,0-15.9,18.5-21.4,75.1C437.6,482,452.5,503.9,452.5,503.9z"/>
          <path onClick={e => this.props.onFill(e)} className="st28" d="M368,388.3c-23.2-16.7-30.8-67.9,26.4-83.1c0,0-25.1-56.8,28.3-59.2c53.4-2.4,65.3,42.1,42.1,66.9
		c0,0,49.2,6.6,34.7,54.2c-14.4,47.6-47.2,38.7-72.7,23C426.7,390.1,402.5,413.1,368,388.3z"/>
        </g>
        <g>
          <polygon onClick={e => this.props.onFill(e)} className="st27" points="49.5,397.4 44,393.5 75.9,344.4 81.4,348.3 	"/>
          <rect onClick={e => this.props.onFill(e)} x="40.2" y="355.7" className="st27" width="9.1" height="109.4"/>
          <ellipse onClick={e => this.props.onFill(e)} className="st28" cx="44.8" cy="316.6" rx="39.7" ry="41.2"/>
          <ellipse onClick={e => this.props.onFill(e)} className="st28" cx="79.9" cy="339.4" rx="22.7" ry="23.6"/>
        </g>
        <path onClick={e => this.props.onFill(e)} className="st29" d="M336.9,106.5c-20.2-22-1.9-38.9,32.1-36.4c0,0,0.3-31.9,26.2-28.4c25.8,3.5,33.1,17.6,34.7,33.5
	c0,0,19.1-12.4,33.4,0c8.8,7.7,4.6,20.1-12.9,27.8c-1.6,14.4-12.3,23-31.5,23c-25.8,0-41.3-16.3-41.3-16.3S349.4,120.2,336.9,106.5z
	"/>
        <path onClick={e => this.props.onFill(e)} className="st30" d="M286.4,196.9c0,0-25.9,8.4-29.8-10.2c-3.9-18.6,3.9-29,20.9-23.9c0,0,0.3-23.6,19.5-18
	c19.2,5.7,17,28.4,17,28.4s2.2-20.6,23.9-21.8s22.5,24.5,22.5,24.5s12.2-5.4,17.2,9.9c5,15.3-7,23.6-24.2,12.6
	c0,0-6.8,13.9-26.1,1.8C319.8,208.6,299.5,211.3,286.4,196.9z"/>
        <circle onClick={e => this.props.onFill(e)} className="st31" cx="122.1" cy="97.5" r="1.8"/>
        <path onClick={e => this.props.onFill(e)} className="st32" d="M98.3,115.7c0,0,17.6,9.9,29.9,0"/>
        <circle onClick={e => this.props.onFill(e)} className="st31" cx="104.1" cy="97.5" r="1.8"/>
      </svg>
    );
  }
}
