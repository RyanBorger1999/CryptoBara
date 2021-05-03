import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


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
                  <form action="/register.php">
                    <input style={{marginTop:"25px", marginRight:"5px" ,borderRadius:"10px", padding:"5px", backgroundColor: "lightblue" , outline:"none"}} type="email" id="email" placeholder="Enter your email address" name="email" ></input>
                    <input type="submit" value="Submit"></input>
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