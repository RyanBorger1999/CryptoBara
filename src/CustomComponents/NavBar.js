import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './NavBar.css';
import Button1 from "./GenericButton/Button1";

class NavBar extends React.Component{
    showSettings (event) {
        event.preventDefault();
        
      }
    render(){
        return(
        <div>
            <nav>
                <ul>
                    <img src="https://i.ibb.co/hBpsgRF/Crypto-Bara-Logo.png" className="baraNav" alt="Crypto-Bara-Logo" border="0"></img>
                    <li className="logo">CryptoBara</li>
                    <li className="items"><a href="/BaraHome">Home</a></li>
                    <li className="items"><a href="https://discord.gg/nk8FnxPtbQ">Discord</a></li>
                    <li className="items"><a href="/BaraSupport">Support</a></li>
                    <li className="items"><a href="/BaraNews">News</a></li>
                    <li className="items"><Button1 description="LOG IN" color="#FF9912" height="40px" width="120px"></Button1></li>
                    <li className="items"><Button1 description="SIGN UP" color="#FF9912" height="40px" marginLeft="-10px" width="120px"></Button1></li>
                    <li>
                        <Menu right menuClassName={"bm-menu"}>
                            <a id="home" className="menu-item" href="/BaraHome">Home</a>
                            <a id="discord" className="menu-item" href="/discord">Discord</a>
                            <a id="BaraSupport" className="menu-item" href="/BaraSupport">Support</a>
                            <a id="BaraNews" className="menu-item" href="/BaraNews">News</a>
                            <a id="LogIn" className="menu-item" href="/LogIn">Log In</a>
                            <a id="SignUp" className="menu-item" href="/SignUp">Sign Up</a>
                        </Menu>
                    </li>
                </ul>
            </nav>
        </div>
        )
    }
}
export default NavBar;