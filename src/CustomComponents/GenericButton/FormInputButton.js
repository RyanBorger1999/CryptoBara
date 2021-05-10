import React from 'react';

class FormInputButton extends React.Component {
  render() {
    let color = this.props.color;
    const buttonStyle = {
      backgroundColor: color,
      color: "black",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      border: "none",
      borderRadius: this.props.borderRadius,
      fontSize: "11px",
      outline: "none",
      marginLeft: this.props.marginLeft,
      maxWidth: this.props.maxWidth,
      width: this.props.width,
      height: this.props.height
    };
    
    function changeBackground(e) {
      e.target.style.background = 'white';
    }

    function originalBackground(e) {
      e.target.style.background = color;
    }
    
    return (
      <input onMouseOver={changeBackground} onMouseLeave={originalBackground} style={buttonStyle} value="SEND" type="submit">
        {this.props.description}
      </input>
    );
  }
}
export default FormInputButton;