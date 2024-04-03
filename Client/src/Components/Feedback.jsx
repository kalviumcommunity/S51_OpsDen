import  { useState } from 'react';
import './Feedback.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate()
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };
  function getUniqueId() {
    return Date.now().toString(36);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const Id = getUniqueId()
    axios.post('https://s51-opsden.onrender.com/api/feedback',{
      id:Id,
      name:name,
      email:email,
      feedback:feedback
    }).then((response) =>{ console.log(response.data);
      navigate('/')})
      .catch((error) => console.error(error))
  };
  return (
    <div id='body'>
    <div className="feedback-container">
      <h2 className="feedback-heading">Feedback Form</h2>
      <form onSubmit={handleSubmit} style={{padding:'0%'}}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input id="iname" type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input id="iemail" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="input-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" style={{padding:'6px'}} value={feedback} onChange={handleFeedbackChange}></textarea>
        </div>
        <button className='button' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}
