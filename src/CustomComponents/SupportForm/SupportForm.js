import emailjs from "emailjs-com";
import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import FormInputButton from '../GenericButton/FormInputButton';
import BaraInput from '../BaraInput/BaraInput';
import './SupportFormStyle.css';

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
      alert('Email has been sent successfully');
  }

    const rectangle = {
      margin: "0 auto",
      maxWidth: "800px",
      width: "100%",
      height: "900px",
      backgroundColor: "#bdc3c7",
      borderRadius: "20px",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      padding: "10px"
    }

  const baraSupport = {
    float: "left",
    maxWidth: "100%",
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
                  <Row><Col><h4>Name</h4></Col></Row>
                  <Row><Col><BaraInput type="text" name="name" placeHolder="John Doe"></BaraInput></Col></Row>
                  <Row><Col><h4>Email</h4></Col></Row>
                  <Row><Col><BaraInput type="email" name="email" placeHolder="JohnDoe@example.com"></BaraInput></Col></Row>
                  <Row><Col><h4>Subject</h4></Col></Row>
                  <Row>
                    <Col>
                        <select style={{marginTop:"10px", marginBottom:"20px", borderRadius:"10px", padding:"10px", backgroundColor: "#fac580", outline: "none", width: "209px"}} id="subject" name="subject" size="1" required>
                          <option value="Setting Up">Setting Up</option>
                          <option value="Billing">Billing</option>
                          <option value="Bug Report">Bug Report</option>
                          <option value="Feature Request">Feature Request</option>
                          <option value="Other">Other</option>
                        </select>
                      </Col>
                  </Row>
                <Row/>
              </Container>
            </Col>
            <Col>
              <div class="supportImage"><img src="https://i.ibb.co/GxtS1Md/bara-Support.png" alt="bara-Support" border="0" style={baraSupport}/></div>
            </Col>
          </Row>
         </Container>
          <Container>
            <Row>
              <Col> 
                <h4>Send us a Message</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea name="message" maxLength="800" style={{maxWidth: "500px", width: "100%", height: "200px", maxHeight: "350px", minHeight: "200px", resize: "vertical", marginTop:"10px", marginBottom:"20px", borderRadius:"10px", padding:"10px", backgroundColor: "#fac580", outline:"none"}} required/>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInputButton color="#FF9912" maxWidth="500px" width="100%" borderRadius="80px"></FormInputButton>
              </Col>
            </Row>
          </Container>
        </form>
      </Container>
    </div>
    );
  }
}

export default SupportForm;