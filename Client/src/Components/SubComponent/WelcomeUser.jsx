import { useState } from 'react';
import Avatar from 'react-avatar';

function WelcomeUser() {
    const [showOptions, setShowOptions] = useState(false);
    const [displayOptions, setDisplayOptions] = useState(false);
    const toggleOptions = () => {
        setShowOptions(!showOptions);
      };
    
      const displayOptionsToggle = () => {
        setDisplayOptions(!displayOptions);
      };
    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
      }
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    if(getCookie('logedin')=="True") {return(
        <div id='welcome-user'>
        
        <div id='Navbar-div' style={{visibility:displayOptions ? 'visible' : 'hidden'}}>
            <button id='Navbar-button' style={{visibility:displayOptions ? 'visible' : 'hidden','marginTop':'1vh' }} onClick={()=>{setCookie('logedin','False',0);window.location.reload();}}>Logout</button>
        </div>
        <h1 className='text-xl text-white'>Welcome {getCookie('user')}</h1>
        <Avatar name={getCookie('user')} size='75px' colors={['red', 'green', 'blue','#15A7B4','#15B415','#B41715','#B4153A','#1557B4','#15B425','#BBC809']} round={true} alt='profile_pic' onClick={() => {
    if (window.innerWidth < 768) {
        toggleOptions();
    } else if (window.innerWidth >= 768) {
        displayOptionsToggle();
    }
}}/>
        </div>
    )}
        }


export default WelcomeUser