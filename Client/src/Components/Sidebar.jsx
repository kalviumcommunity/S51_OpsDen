import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu menu-1">
        <br />
        <Link to={'/'}><li>Home</li></Link>
        <br />
        <Link to={'/Popular'}><li>Popular News</li></Link>
        <br />
        <Link to={'/Forum'}><li>Forum</li></Link>
        <br />
      </ul>
      <hr />
      <ul className='menu'>
<h1>Categories:</h1>
        <br />
        <Link to={`/news/ArtifialIntelligence`} state={{'topic':'AI'}}><li>Artifial Intelligence</li></Link>
        <br/>
        <Link to={`/news/Blockchain`} state={{'topic':'Blockchain'}}><li>Blockchain</li></Link>
        <br />
        <Link to={`/news/WebDevelopment`} state={{'topic':'Web%20Development'}}><li>Web Development</li></Link>
        <br />
        <Link to={`/news/DataScience&Analytics`} state={{'topic':'Data%20Science&Analytics'}}><li>Data Science & Analytics</li></Link>
        <br />
        <Link to={`/news/HealthandWellness`} state={{'topic':'Health%20and%20Wellness'}}><li>Health and Wellness</li></Link>
        <br />
        <Link to={`/news/Science&Technology`} state={{'topic':'Science&Technology'}}><li>Science & Technology</li></Link>
        <br />
        <Link to={`/news/Business&Finance`} state={{'topic':'Business&Finance'}}><li>Business & Finance</li></Link>
        <br />
      </ul>
      <hr />
      <ul className="menu menu-2">
      <br />
        <Link to='/guide'><li>Guidelines</li></Link>
        <br />
        <Link to='/feedback'><li>Feedback</li></Link>
      </ul>
    </div>
  );
}
