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
        <Link to={`/news/ArtifialIntelligence`} state={{'topic':'AI'}}><li>Artifial Intelligence</li></Link>
        <Link to={`/news/Blockchain`} state={{'topic':'Blockchain'}}><li>Blockchain</li></Link>
        <Link to={`/news/WebDevelopment`} state={{'topic':'WD'}}><li>Web Development</li></Link>
        <Link to={`/news/DataScience&Analytics`} state={{'topic':'DSA'}}><li>Data Science & Analytics</li></Link>
        <Link to={`/news/HealthandWellness`} state={{'topic':'HW'}}><li>Health and Wellness</li></Link>
        <Link to={`/news/Gaming`} state={{'topic':'Gaming'}}><li>Gaming</li></Link>
        <Link to={`/news/Science&Technology`} state={{'topic':'Science'}}><li>Science & Technology</li></Link>
        <Link to={`/news/Business&Finance`} state={{'topic':'Business'}}><li>Business & Finance</li></Link>
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
