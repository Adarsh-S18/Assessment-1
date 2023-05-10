import React, { useState } from 'react'
import axios from 'axios'
import './Navbar.css'

function Navbar() {
  
  const [showModal, setShowModal] = useState(false)
  const [movieData, setMovieData] = useState({
    title: '',
    genre: '',
    description: '',
    duration: '',
    image: null
  });

  const handleAddMovie = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', movieData.title);
    formData.append('genre', movieData.genre);
    formData.append('description', movieData.description);
    formData.append('duration', movieData.duration);
    formData.append('image', movieData.image);
    try {
      const response = await axios.post('http://localhost:5000/movies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setShowModal(false)
    } catch (error) {
      console.error(error);
    }
  }
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'image') {
      setMovieData({
        ...movieData,
        image: event.target.files[0]
      });
    } else {
      setMovieData({
        ...movieData,
        [name]: value
      });
    }
  };
  

  return (
    <nav className="navbar">
      <div className="navbarleft">
        <h1>Movies</h1>
      </div>
      <div className="navbarcenter">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbarright">
        <button onClick={handleAddMovie}>Add movie</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Title:</label>
                <input
                  type="text"
                  name="title"
                  value={movieData.title}
                  onChange={handleChange}
                />
              <label>
                Genre:</label>
                <select
                  name="genre"
                  value={movieData.genre}
                  onChange={handleChange}
                >
                  <option value="">Select a genre</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Romance">Romance</option>
                  <option value="Thriller">Thriller</option>
                </select>
              <label>
                Description:</label>
                <input
                  type="text"
                  name="description"
                  value={movieData.description}
                  onChange={handleChange}
                />
              <label>
                Duration:</label>
                <input
                  type="number"
                  name="duration"
                  value={movieData.duration}
                  onChange={handleChange}
                />
              <label>
                Image:</label>
                <input
                  type="file" 
                  name="image"
                   accept="image/*"
                  onChange={handleChange}
                />

              <button type="submit">Add Movie</button>
            </form>
          </div>
        </div>
      )
      }
    </nav>
  )
}

export default Navbar
