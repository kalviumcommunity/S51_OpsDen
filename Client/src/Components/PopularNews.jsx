import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css'
function PopularNews() {
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
          const response = await axios.get(`https://s51-opsden.onrender.com/news/popular`);
          setData(response.data); 
          setState({ loading: false, error: null });
          console.log(response.data);
        } catch (err) {
          console.error(err);
          setState({ loading: false, error: err });
        }
      };
    //   if (state.error) {
    //     return <div style={{ color: 'red' }}>Error: {state.error.response.data.errors
    //     }</div>;
    //   }
      if (state.loading) {
        return <div>Loading...</div>;
      }
      return (
        <>
          <Navbar />
          <Sidebar/>
          <div id='Article'>
            {data.articles.length > 0 ? ( 
              data.articles.map((item,index)=>{
                return ((item.title!='[Removed]')?<div className='arc' key={index}><div><img id='newsimg' src={item.image} alt="news image" /></div> <div id='contnt'><div style={{color:'rgb(242, 255, 0)'}}>{item.title}</div>
                <div>{item.description}</div></div></div>:<></>)
              })) : (
              <div>No articles found.</div> 
            )}
          </div>
        </>
      )
}

export default PopularNews