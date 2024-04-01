import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <br />
        <li>Home</li>
        <li>Popular</li>
        <br />
      </ul>
      <ul className="menu">
        <Link to='/guide'><li>Guidelines</li></Link>
        <Link to='/feedback'><li>Feedback</li></Link>
      </ul>
    </div>
  );
}
