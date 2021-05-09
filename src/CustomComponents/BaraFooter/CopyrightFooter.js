import React from 'react';
import { MDBFooter } from "mdbreact";
import BaraFooter from './BaraFooter';

class CopyrightFooter extends React.Component {
    render() {
        {
            return(   
                <MDBFooter>
                    <BaraFooter></BaraFooter>
                    <div className="text-center">&copy; {new Date().getFullYear()} CryptoBara</div>
                </MDBFooter>
            );
        }
    }
}
export default CopyrightFooter;