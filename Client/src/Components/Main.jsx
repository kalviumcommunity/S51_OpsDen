import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
function Home() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    const iplteamdata = async()=>{
    try{
        const response = await axios.get('https://newsapi.org/v2/everything?q=technology&apiKey=58c704c32aae4231806de0e814888bee')
        setData(response.data)
        console.log(response.data);
    }catch(err){
        console.error(err)
    }
}
iplteamdata()
},[])
  return (
    <>
    <Navbar/>
    <div id='Article'>
        {data.articles.map((item,index)=>{
          return ((item.title!='[Removed]')?<div className='arc' key={index}><div><img id='newsimg' src={item.urlToImage} alt="news image" /></div> <div style={{color:'rgb(242, 255, 0)'}}>{item.title}</div>
          <div>{item.description}</div></div>:<></>)
        })}
    </div>
    </>
  )
}

export default Home