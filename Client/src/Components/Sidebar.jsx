import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <br />
        <li>Home</li>
        <li>Popular News</li>
        <br />
        <hr />
        <br />
        <li>Categories</li>
        <br />
        <hr />
        <br />
        <Link to='/guide'><li>Guidelines</li></Link>
        <li>About Us</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
}
