import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Home.css'
import Logo from "../assets/logo-removedbg.png";
import Video from "../video/video.mp4";
import { Link } from 'react-router-dom';
import '../App.css'
function Main() {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
   
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
      const response = await axios.get('https://newsapi.org/v2/everything?q=tech&language=en&sortBy=publishedAt&apiKey=58c704c32aae4231806de0e814888bee');
      setData(response.data); 
      setState({ loading: false, error: null });
      console.log(response.data);
    } catch (err) {
      console.error(err);
      setState({ loading: false, error: err });
    }
  };

  if (state.error) {
    return <div style={{ color: 'red' }}>Error: {state.error.message}</div>;
  }

  if (state.loading) {
    return <div>Loading...</div>;
  }
  if(getCookie('logedin')){
  return (
    <>
      <Navbar />
      <div id='Article'>
        {data.articles.length > 0 ? ( 
          data.articles.map((item,index)=>{
            return ((item.title!='[Removed]'&&item.urlToImage!= null)?<div className='arc' key={index}><div><img id='newsimg' src={item.urlToImage} alt="news image" /></div> <div style={{color:'rgb(242, 255, 0)'}}>{item.title}</div>
            <div>{item.description}</div></div>:<></>)
          })) : (
          <div>No articles found.</div> // Display a message if no articles are found
        )}
      </div>
    </>
  )}else{  return (
    <div id='body'>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div id='content'>
        <img className="logo" src={Logo} alt="logo" />
        <p className='welcome'>Welcome to OpsDen</p>
        <Link to="/signup"><button className='login'>Login</button></Link>
      </div>
      <footer className='copy'>&copy; Copyright of OpsDen from 2024 - 2082</footer>
    </div>
  );}
}

export default Main;
