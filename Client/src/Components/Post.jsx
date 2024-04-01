import React, { useState } from 'react';
import './Post.css';

export default function Post() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle('');
    setText('');
    setImage(null);
  };

  return (
    <div className="post-container">
      <h2 className="heading">New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div className="input">
          <label htmlFor="text">Text:</label>
          <textarea id="text" value={text} onChange={handleTextChange}></textarea>
        </div>
        <div className="input">
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <button  className='button' type="submit">Submit</button>
      </form>
    </div>
  );
}
