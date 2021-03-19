import React from 'react';
import ReactDOM from 'react-dom';
import facebook from "../assets/img/facebook.svg"
import instagram from "../assets/img/instagram.svg"
import linkedin from "../assets/img/linkedin.svg"
import youtube from "../assets/img/youtube.svg"


function Navicons() {
  return (
    <div className="icons-nav">
        <img src={facebook} style={{
          height: '15px',
          marginTop: '120px',
          padding: '5px'
        }}/>
        <img src={instagram} style={{
          height: '15px',
          marginTop: '34px',
          padding: '5px'
        }}/>
        <img src={linkedin} style={{
          height: '15px',
          marginTop: '34px',
          padding: '5px'
        }}/>
        <img src={youtube} style={{
          height: '15px',
          marginTop: '34px',
          padding: '5px'
        }}/>
    </div>
  );
}

export default Navicons;
