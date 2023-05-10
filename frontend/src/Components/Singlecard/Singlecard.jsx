import React, { useState } from 'react';
import './Singlecard.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const Singlecard = ({ title, description, duration, img, id, deleteAmovie }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        try {
            deleteAmovie(id);
            const response = await axios.delete(`http://localhost:5000/movies/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = async()=>{
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <>
            <div className="card" onClick={() => setShowModal(true)}>
                <img src={`http://localhost:5000/images/${img}`} alt={title} />
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>Duration: {duration}</p>
                    <div className="card-hover">
                        <button className="editbutton" onClick={handleEdit}>
                            <EditIcon />
                        </button>
                        <button className="deletebutton" onClick={handleDelete}>
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <img src={`http://localhost:5000/images/${img}`} alt={title} />
                        <h3>Title :{title}</h3>
                        <p>Description :{description}</p>   
                        <p>Duration: {duration}</p>
                    </div>  
                </div>
            )}
        </>
    );
};

export default Singlecard;
