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
                    <a href="/BaraHome"><img src="https://i.ibb.co/hBpsgRF/Crypto-Bara-Logo.png" className="baraNav" alt="Crypto-Bara-Logo" border="0"></img></a>
                   <li className="logo"> <a href="/BaraHome">CryptoBara</a></li>
                    <li className="items"><a href="/BaraHome">Home</a></li>
                    <li className="items"><a href="https://discord.com/invite/TRH563Yx8X">Discord</a></li>
                    <li className="items"><a href="/BaraSupport">Support</a></li>
                    <li className="items"><a href="/BaraNews">News</a></li>
                    <li className="items"><a href="/BaraLogIn"><Button1 description="LOG IN" color="#FF9912" height="40px" width="120px"></Button1></a></li>
            
                    <li>
                        <Menu right menuClassName={"bm-menu"}>
                            <a id="home" className="menu-item" href="/BaraHome">Home</a>
                            <a id="discord" className="menu-item" href="https://discord.com/invite/TRH563Yx8X">Discord</a>
                            <a id="BaraSupport" className="menu-item" href="/BaraSupport">Support</a>
                            <a id="BaraNews" className="menu-item" href="/BaraNews">News</a>
                            <a id="BaraAccount" className="menu-item" href="/BaraLogIn">Log In</a>
                        </Menu>
                    </li>
                </ul>
            </nav>
        </div>
        )
    }
}
export default NavBar;