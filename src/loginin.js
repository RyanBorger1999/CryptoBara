import React, { Component } from 'react';
import Select from 'react-select';
import '../../App.css';


class User extends Component{
    constructor(props) {
            super(props);
            this.state = {
                emplpoyeeid: '',
                retailerid: '',
                itemid: '',
                itemamount: '',
                salesDiscount: 0,
                id: '',
                itemPrice: '',
                tax: '',
                retailDiscount: '',
                totalcost: '',
            };

        this.handleCalculatePrice = this.handleCalculatePrice.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleRetailerChange = this.handleRetailerChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit() {
        console.log(this.state);
    }


    handleItemChange(event){
        this.setState({ itemid: event.value});
        this.setState({ itemPrice: event.price});
        console.log(this.state);
    }

    handleRetailerChange(event){
        this.setState({ retailerid: event.value});
        this.setState({ retailerDiscount: event.retailDiscount});
        this.setState({ tax: event.tax});
        console.log(this.state);
    }

    handleCalculatePrice() {
        try {
            

        } catch (e) {
            return "Something went wrong, check your inputs.";
        }
    }


    renderForm() {

        return (
            <div className="div">
                <label>Username:
                    <input type="text"  name="username" onChange={this.handleInputChange}/>
                </label>
                <br />
                <label>Password:
                    <input type="text" name="password" onChange={this.handleInputChange}/>
                </label>
                <br />
                <label>Confirm Password:
                    <input type="text" name="confirmPassword" onChange={this.handleInputChange}/>
                </label>
                <br />
                <button onClick="getElementById('displayPrice').innerHTML=this.handleCalculatePrice">Calculate Total</button>
                <p id="mismatchedPasswords"> </p>
                <br />
                <button onClick={this.handleFormSubmit}>Create Account</button>
            </div>
        );
    }
    render() {
        return (
            <div>
                <h1> New Order </h1>
                {this.renderForm()}
            </div>
        );
    }
}

export default User;