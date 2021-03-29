import React from 'react';

class Button1 extends React.Component {
  render() {
    const buttonStyle = {
      backgroundColor: "#FF9912",
      color: "black",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      border: "none",
      borderRadius: "8px",
      padding: "12px 35px",
      transitionDuration: "0.4s"
    };
    // TODO: Add some sort of hover effect please

    return (
      <button style={buttonStyle} type="submit" form="emailForm" value="Submit">{this.props.description}</button>
    );
  }

}

export default Button1;