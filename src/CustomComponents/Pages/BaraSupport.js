import React, { Component } from 'react';
import SupportForm from "../SupportForm/SupportForm";
import { Container } from 'reactstrap';

class BaraSupport extends Component {

    render(){
        return(
            <div className="backgroundPage" style={{paddingBottom: "1200px"}}>
                <Container>
                    <div>
                        <Container>
                            <h1 style={{textAlign: "center"}}>Customer Support</h1>
                        </Container>
                        <Container>
                            <p style={{color: "white", textAlign: "center"}}>Email us with questions or concerns</p>
                        </Container>
                        <SupportForm></SupportForm>
                    </div >
                </Container>
            </div>
        );
    }
}
export default BaraSupport;