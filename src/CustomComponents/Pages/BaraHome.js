import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Module from "../GenericModule/Module";

class BaraHome extends React.Component{
  render(){
    return (
      <div className="backgroundPage">
        <div className="container">
          <img src="https://i.ibb.co/TTF9NZ8/Crypto-Bara-Logo.png" className="CryptoBaraImg" alt="Crypto-Bara-Logo"  border="0"></img>
        </div>
        <div className="container">
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
          <Module title="THE TITLE" description="The DESCRIPTION"></Module>
      </div>
    );
  }
}

export default BaraHome;
