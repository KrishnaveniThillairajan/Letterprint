import React, { useState } from 'react';
import './Music.css'
const Music = () => {
  // Define state variable for visibility
  const [isVisible, setIsVisible] = useState(true);

  // Define state variable for audio tracks and their edit states
  const [audioTracks, setAudioTracks] = useState([
    { title: 'Anbe en Anbe un vizhi thane', isEditing: false },
    { title: 'Ennai Kollathey THali POgathey', isEditing: false },
    { title: 'engeyoo partha mayakam ...', isEditing: false },
    { title: 'munbeva en anbe va', isEditing: false },
    { title: 'munbeva en anbe va', isEditing: false }
  ]);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };<br/>

  // Function to handle editing
  const handleEdit = (index) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].isEditing = true;
    setAudioTracks(updatedAudioTracks);
  };

  // Function to handle saving edits
  const handleSave = (index) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].isEditing = false;
    setAudioTracks(updatedAudioTracks);
  };

  // Function to handle canceling edits
  const handleCancel = (index) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].isEditing = false;
    setAudioTracks(updatedAudioTracks);
  };

  // Function to handle input change during editing
  const handleInputChange = (index, event) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].title = event.target.value;
    setAudioTracks(updatedAudioTracks);
  };

  return (
    <div className='audionotes'>
    <div>
      {/* Button to toggle visibility */}
      
      <button className='btn' onClick  ={toggleVisibility}style={{
        marginBottom: '10px', // Adjust margin as needed
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 40px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
      }}>{isVisible  ? 'Hide' : 'Show'} Audio </button>

      {/* Render audio elements based on visibility state */}
      {isVisible && (
        <div>
          {audioTracks.map((track, index) => (
            <div className={`audio${index + 1}`} key={index}>
              <h4>Audio Notes:</h4>
              {track.isEditing ? (
                <input
                  type="text"
                  value={track.title}
                  onChange={(event) => handleInputChange(index, event)}
                />
              ) : (
                <h5>{track.title}</h5>
              )}
              <audio controls>
                <source src={`https://files.codingninjas.in/better-day-186374-1705648893.mp3`} type="audio/mp3"/>
              </audio>
              {/* Render edit, save, and cancel buttons based on edit state */}
              {track.isEditing ? (
                <>
                  <button  className='audiosave' onClick={() => handleSave(index)}>Save</button>
                  <button   className='audiocancel' onClick={() => handleCancel(index)}>Cancel</button>
                </>
              ) : (
                <button className='audioedit' onClick={() => handleEdit(index)}>Edit</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Music;
