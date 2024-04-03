import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Logo from "../assets/Designer__7_-removebg.png";
import { Link } from 'react-router-dom';
import '../App.css'
import './Main.css'
import Sidebar from './Sidebar';
// import Video from '../assets/grid_-_82515 (1440p).mp4'
function Main() {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  console.log(getCookie('logedin'))
   
  const [data, setData] = useState({ articles: [] }); 
  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get('https://s51-opsden.onrender.com/news/tech');
      setData(response.data); 
      setState({ loading: false, error: null });
      console.log(response.data);
    } catch (err) {
      console.error(err);
      setState({ loading: false, error: err });
    }
  };
  // if (state.error) {
  //   return <div style={{ color: 'red' }}>Error: {state.error.response.data.errors
  //   }</div>;
  // }
  if (state.loading) {
    return <div>Loading...</div>;
  }
  if(getCookie('logedin')=="True"){
  return (
    <>
      <Navbar />
      <Sidebar/>
      <div id='Article'>
        {data.articles.length > 0 ? ( 
          data.articles.map((item,index)=>{
            return ((item.title!='[Removed]')?<div className='arc' key={index}><div><img id='newsimg' src={item.image} alt="news image" /></div> <div id='contnt'><div style={{color:'rgb(242, 255, 0)'}}>{item.title}</div><br />
            <div>{item.description}</div></div></div>:<></>)
          })) : (
          <div>No articles found.</div> 
        )}
      </div>
    </>
  )}else{  return (
    <>
    <div id='body'>
      <video autoPlay loop muted id="backgroundVideo">
        <source src="https://videos.pexels.com/video-files/8879031/8879031-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <div id='content1'>
      <div id='Name1'><img id="logo" src={Logo} alt="logo" /><h1 id='title'>OpsDen</h1></div>     <p className='welcome'>Welcome to OpsDen</p>
        <Link to="/signup"><button className='login'>Login</button></Link>
      </div>
      </div>
      <footer>&copy; Copyright of OpsDen from 2024 - 2082</footer>
    </>
  );}
}

export default Main;
