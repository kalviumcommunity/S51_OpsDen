import logo from '../assets/Logo-2.png';
import logo2 from '../assets/MobileLogo.png';
import WelcomeUser from './SubComponent/WelcomeUser'
import { useEffect } from 'react';
import './Navbar.css'

export default function Navbar() {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        window.location.reload();
      } else if (window.innerWidth < 768) {
        window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        {window.innerWidth >= 768 ? (
        <img  src={logo} alt='logo' />
      ) : (
        <img  src={logo2} alt='logo2' />
      )}
        <input id='searchBar' type='text' placeholder='Search 🔍' style={{paddingLeft: '10px'}}/>
        <button id='post'>Post + </button>
        <WelcomeUser/>
      </nav>
    </>)
}
