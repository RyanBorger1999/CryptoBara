import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { render } from "@testing-library/react";
import Button1 from "./GenericButton/Button1";

class BaraFooter extends React.Component {
  render() {
    {
      const mystyle = {
        color: "white",
        backgroundColor: "red",
        fontFamily: "Arial"
      };
    return (
      <MDBFooter color="orange" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol>
              <h6 style={mystyle} className="title" class="text-center p-2">Start accepting CryptoCurrencies for your Minecraft Server</h6>
              <p class="text-center">
                Sign up for free today
              </p>
              <p class="text-center" className="emailInput">
                <form action="/action_page.php" method="get" id="emailForm">
                  <input style={{backgroundColor: "lightblue"}} type="email" id="email" name="emailName" placeholder="Enter your email address"></input>
                    <Button1 description={"Test123"}></Button1>
                </form>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:  CryptoBara.net
          </MDBContainer>
        </div>
      </MDBFooter>
      );
    } 
  }
}

export default BaraFooter;