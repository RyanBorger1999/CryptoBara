
import React from "react";

class BaraInput extends React.Component {
    render() {
        //Props to pass into the baraInput component
        let type = this.props.type;
        let id = this.props.id;
        let name = this.props.name;
        let placeHolder = this.props.placeHolder;
        
        const baraInputStyle = {
            backgroundColor: "#fac580",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "10px",
            outline: "none",
        }
        
        return (
            <input style={baraInputStyle} type={type} id={id} name={name} placeholder={placeHolder} required></input>
        );
    }

}

export default BaraInput;