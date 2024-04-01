import React, { useState } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-heading">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="input-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" value={feedback} onChange={handleFeedbackChange}></textarea>
        </div>
        <button className='button' type="submit">Submit</button>
      </form>
    </div>
  );
}
