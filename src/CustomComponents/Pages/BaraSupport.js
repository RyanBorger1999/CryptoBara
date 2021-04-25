import React, { Component } from 'react';
import SupportForm from "../SupportForm";
import { Row, Container, Col } from 'reactstrap';
import BaraFooter from '../BaraFooter';

class BaraSupport extends Component {

    render(){
        return(
            <div className="backgroundPage">
                <Container>
                    <div>
                        <Container>
                            <h1 style={{textAlign: "center"}}>Customer Support</h1>
                        </Container>
                        <Container>
                            <p style={{color: "white", textAlign: "center"}}>Email us with questions or concerns</p>
                        </Container>
                        <SupportForm></SupportForm>
                    </div>
                </Container>
            </div>
        );
    }
}
export default BaraSupport;