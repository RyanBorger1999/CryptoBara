import React from 'react';
import {FaBars} from 'react-icons/fa'
import './NavBar.css';
import Button1 from "./GenericButton/Button1";

class NavBar extends React.Component{
    render(){
      
        return(
        <div>
        <nav>
            <ul>
                <li class="logo">CryptoBara</li>
                <li class="items"><a href="#">Home</a></li>
                <li class="items"><a href="#">About</a></li>
                <li class="items"><a href="#">Discord</a></li>
                <li class="items"><a href="#">Feedback</a></li>
                <li class="items"><Button1 description="Log In" height="40px" width="120px"></Button1></li>
                <li class="items"><Button1 description="Sign Up" height="40px" width="120px"></Button1></li>
                
                <li class="btn"><FaBars/></li>
                
                    
            </ul>
          
        </nav>
        </div>
        )
    }
}
export default NavBar;