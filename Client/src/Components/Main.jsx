import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Main() {
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
      const response = await axios.get('https://newsapi.org/v2/everything?q=technology&apiKey=58c704c32aae4231806de0e814888bee');
      setData(response.data); 
      setState({ loading: false, error: null });
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

  return (
    <>
      <Navbar />
      <div id='Article'>
        {data.articles.length > 0 ? ( 
          data.articles.map((item, index) => (
            <div className='arc' key={index}> 
              <div>
                <img id='newsimg' src={item.urlToImage} alt='news image' />
              </div>
              <div style={{ color: 'rgb(242, 255, 0)' }}>{item.title}</div>
              <div>{item.description}</div>
            </div>
          ))
        ) : (
          <div>No articles found.</div> // Display a message if no articles are found
        )}
      </div>
    </>
  );
}

export default Main;
