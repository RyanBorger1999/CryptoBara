import emailjs from "emailjs-com";
import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import FormInputButton from './GenericButton/FormInputButton';

class SupportForm extends React.Component {
  render() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_69ka82o', 'support_ticket', e.target, 'user_95ssOES1jRNx54ZSnx0Vl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    const rectangle = {
      margin: "0 auto",
      maxWidth: "800px",
      width: "100%",
      maxHeight: "760px",
      height: "100%",
      backgroundColor: "#FF9912",
      borderRadius: "20px",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      padding: "10px"
  }

  const baraSupport = {
    float: "left",
    width: "260px",
    height: "auto",
    padding: "10px", 
  }

  return (
    <div style={rectangle}>
      <Container>
        <form className="contact-form" onSubmit={sendEmail}>
        <Container style={{marginTop:"40px"}}>
          <Row>
            <Col sm={6}>
              <Container>
                <Row>
                  <Col><h4>Name</h4></Col>
                  </Row>
                  <Row><Col><input style={{marginTop:"10px", marginBottom:"20px", borderRadius:"10px", padding:"10px", backgroundColor: "lightblue" , outline:"none"}} type="text" name="name" placeholder="John Doe" required></input></Col></Row>
                  <Row><Col><h4>Email</h4></Col></Row>
                  <Row><Col><input style={{marginTop:"10px", marginBottom:"20px", borderRadius:"10px", padding:"10px", backgroundColor: "lightblue" , outline:"none"}} type="email" name="email" placeholder="JohnDoe@example.com" required></input></Col></Row>
                  <Row><Col><h4>Subject</h4></Col></Row>
                  <Row>
                    <Col>
                        <select style={{marginTop:"10px", marginBottom:"20px", borderRadius:"10px", padding:"10px", backgroundColor: "lightblue" , outline:"none"}} id="subject" name="subject" size="1" required>
                          <option value="volvo">Setting Up</option>
                          <option value="saab">Billing</option>
                          <option value="fiat">Bug Report</option>
                          <option value="audi">Feature Request</option>
                          <option value="audi">Other</option>
                        </select>
                      </Col>
                    </Row>
                <Row/>
              </Container>
            </Col>
            <Col><img src="https://i.ibb.co/GxtS1Md/bara-Support.png" alt="bara-Support" border="0" style={baraSupport}/></Col>
          </Row>
          <Container>
          <Row>
            <Col> 
              <h4>Send us a Message</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea name="message" style={{maxWidth: "500px", width: "100%", height: "200px", maxHeight: "350px", minHeight: "200px", resize: "vertical", marginTop:"10px", marginBottom:"20px", borderRadius:"10px", padding:"10px", backgroundColor: "lightblue" , outline:"none"}} required/>
              </Col>
            </Row>
         </Container>
         </Container>
        </form>
      </Container>
    </div>
    );
  }
}



/*
        <Col><img src="https://i.ibb.co/GxtS1Md/bara-Support.png" alt="bara-Support" border="0" style={baraSupport}/></Col>
*/

export default SupportForm;