import { noChange } from 'lit-html';
import React, {useState} from 'react';

class Button1 extends React.Component {

  render() {
    
    const buttonStyle = {
      backgroundColor: "#FF9912",
      color: "black",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      border: "none",
      borderRadius: "80px",
      padding: "12px 35px",
      outline: "none",
      width : this.props.width,
      height : this.props.height
    };
    
    function changeBackground(e) {
      e.target.style.background = 'white';
    }
    function originalBackground(e) {
      e.target.style.background = '#FF9912';
    }
    
    return (
    <button onMouseOver={changeBackground} onMouseLeave={originalBackground} style={buttonStyle} type="button" form="emailForm" value="Submit">
            {this.props.description}
          </button>
      
    );
  }

}

export default Button1;