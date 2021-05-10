import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import BaraInput from '../BaraInput/BaraInput';
import FormInputButton from '../GenericButton/FormInputButton';

class BaraFooter extends React.Component {
  render() {
 
    {
        const mystyle = {
        color: "black",
        fontFamily: "Microsoft Sans Serif",
        paddingTop: "20px",
        paddingBottom: "25px",
        fontSize: "15px",
        textDecoration: "underline"
    }
  
    return (
          <MDBContainer fluid className="text-center">
            <MDBRow>
                <MDBCol fluid className="text-center">
                  <div className="signupFooter"> 
                    <h5 style={mystyle}>Start accepting cryptocurrencies for your Minecraft Server</h5>
                    Sign up for free today
                    <form action="/register.php">
                      <BaraInput type="email" id="email" name="email" placeHolder="JohnDoe@example.com"></BaraInput>
                      <FormInputButton color="#FF9912" maxWidth="100px" width="100%" height="50px"></FormInputButton>
                    </form> 
                  </div>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
      );
    } 
  }
  
}
//<input style={{marginTop:"25px", marginRight:"5px" ,borderRadius:"10px", padding:"5px", backgroundColor: "#FF9912" , outline:"none"}} type="email" id="email" placeholder="Enter your email address" name="email" ></input>

export default BaraFooter;