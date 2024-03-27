import logo from '../assets/Logo-2.png';
import logo2 from '../assets/MobileLogo.png';
import profile from '../assets/profile_pic.png';
import '../App.css';

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const displayOptionsToggle = () => {
    setDisplayOptions(!displayOptions);
  };

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
    <nav
      id='color'
      className='flex justify-between items-center p-5 shadow-blue-700 shadow-xl'
    >
      {window.innerWidth >= 768 ? (
        <img className='h-12' src={logo} alt='logo' />
      ) : (
        <img className='h-12' src={logo2} alt='logo2' />
      )}
      <input id='searchBar' type='text' className='px-2 py-1 text-white bg-transparent border rounded w-full sm:w-80' placeholder='Search 🔍'/>
      <div className='relative'>
        <div className={`absolute top-5 bg-white p-2 rounded-lg shadow-md ${showOptions ? 'block' : 'hidden'}`}>
          <p className='text-xs text-gray-800 sm:block'>Welcome Username</p>
          <button className='text-xs text-gray-600 block sm:hidden'>POST</button>
          <button className='text-xs text-gray-600 block sm:hidden'>Logout</button>
        </div>
      </div>
      {window.innerWidth >= 768 && (
        <>
          <button className='text-xs text-white rounded border border-white p-2'>
            POST
          </button>
          <div className='relative'>
          <p className='text-xs text-white'>Welcome Username</p>
            <div className={`absolute top-7 left-52 bg-white p-2 rounded-lg shadow-md ${displayOptions ? 'block' : 'hidden'}`}>
              <p className='text-xs text-gray-800 sm:block'>Logout</p>
            </div>
          </div>
        </>
      )}
      <div>
        <img  src={profile} alt='profile_pic' className='h-9 rounded-full cursor-pointer m-5' onClick={() => {
            if (window.innerWidth < 768) {
              toggleOptions();
            } else if (window.innerWidth >= 768) {
              displayOptionsToggle();
            }
          }}
        />
      </div>
    </nav>
  );
}
