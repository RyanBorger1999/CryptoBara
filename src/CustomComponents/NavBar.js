import React from 'react';
import {FaBars} from 'react-icons/fa'
import './NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
        <div>
        <nav>
            <ul>
                <li class="logo">CryptoBara</li>
                <li class="items"><a href="#">About</a></li>
                <li class="items"><a href="#">Blogs</a></li>
                <li class="items"><a href="#">Contact</a></li>
                <li class="items"><a href="#">Feedback</a></li>
                <li class="btn"><FaBars/></li>
                    
            </ul>
          
        </nav>
          
          <div class="main">
            <h1>CRYPTOBARA</h1>
            
          </div>
        </div>
        )
    }
}
export default NavBar;