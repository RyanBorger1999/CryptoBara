import React from 'react';

class Button1 extends React.Component {
  render() {
    let color = "#FF9912";
    const buttonStyle = {
      backgroundColor: color,
      color: "black",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      border: "none",
      borderRadius: "80px",
      fontSize: "11px",
      outline: "none",
      marginLeft: this.props.marginLeft,
      width : this.props.width,
      height : this.props.height
    };
    
    function changeBackground(e) {
      e.target.style.background = 'white';
    }
    
    function originalBackground(e) {
      e.target.style.background = color;
    }
    
    return (
      <button onMouseOver={changeBackground} onMouseLeave={originalBackground} style={buttonStyle} type="button" onclick={this.props.locate} form="emailForm" value="Submit">
        {this.props.description}
      </button>
    );
  }
}
export default Button1;