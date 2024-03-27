import React from 'react';
import Logo from "../assets/logo-removedbg.png";
import Video from "../video/video.mp4";
import { Link } from 'react-router-dom';
import '../App.css'

function TitlePage() {
  return (
    <div className='container'>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className='content'>
        <img className="logo" src={Logo} alt="logo" />
        <p className='welcome'>Welcome to OpsDen</p>
        <Link to="/signup"><button className='login'>Login</button></Link>
      </div>
      <footer className='copy'>&copy; Copyright of OpsDen from 2024 - 2082</footer>
    </div>
  );
}

export default TitlePage;
