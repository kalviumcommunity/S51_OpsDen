import React from 'react';
import Logo from "../assets/Logo-2.png";
import Video from "../video/video-2160p.mp4";
import '../App.css'

function Home() {
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
        <button className='login'>Login</button>
      </div>
      <footer className='copy'>&copy; Copyright of OpsDen from 2024 - 2082</footer>
    </div>
  );
}

export default Home;
