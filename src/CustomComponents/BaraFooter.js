import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Button1 from "./GenericButton/Button1";

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
      <MDBFooter className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center">
          <MDBRow>
              <MDBCol fluid className="text-center">
                <div className="signupFooter"> 
                  <h5 style={mystyle}>Start accepting cryptocurrencies for your Minecraft Server</h5>
                  Sign up for free today
                  <form action="/action_page.php" method="get" id="emailForm">
                    <input style={{marginTop:"25px", borderRadius:"10px", padding:"10px", backgroundColor: "lightblue" , outline:"none"}} type="email" id="email" name="emailName" placeholder="Enter your email address"></input>
                    <Button1 description="SUBMIT" color="#FF9912" marginLeft="10px" width="120px" height="28px"></Button1>
                  </form>
                </div>
              </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      );
    } 
  }
}

export default BaraFooter;