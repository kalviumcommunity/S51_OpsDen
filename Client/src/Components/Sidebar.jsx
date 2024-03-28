import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <br />
        <li>Home</li>
        <li>Popular</li>
        <br />
        <hr />
        <br />
        <li>Categories</li>
        <br />
        <hr />
        <br />
        <li>Guidelines</li>
        <li>About Us</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
}
