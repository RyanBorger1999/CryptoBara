import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './BaraHome.css';

class BaraHome extends React.Component{
  render(){
    return (
      <div className="backgroundPage">
        <div className="containerHome">
          <img src="https://i.ibb.co/TTF9NZ8/Crypto-Bara-Logo.png" className="CryptoBaraImg" alt="Crypto-Bara-Logo"  border="0"></img>
        </div>
        <div className="containerHome">
          <ReactTypingEffect
              text={[ "Welcome to CryptoBara...","Learn more...." ]}
              speed={70}
              style={{
                fontFamily: 'Microsoft Sans Serif',
                color: 'white',
                fontWeight: 600,
                fontSize: '30px',
              }}
              eraseSpeed={60}
              eraseDelay={700}
              staticText={[ "CryptoBara : "]}/>
        </div>
        
        <div className="container">
          <div class="row align-items-center">
            <img class="modulePicture" src="https://i.ibb.co/XW29C39/Adult-capybara.jpg"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default BaraHome;
