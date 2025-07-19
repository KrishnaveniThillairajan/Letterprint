import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
const Audio = () => {
  
  const [isVisible, setIsVisible] = useState(true);

 
  const [audioTracks, setAudioTracks] = useState([
    { title: '  Cause Im in the field OF dANDELIONS', isEditing: false },
    { title: 'We Go Wild we are in Safariii', isEditing: false },
    { title: 'YOU BETWEEN MY ARMS ...', isEditing: false },
    { title: 'ladies and gentlemen will you please stand.....', isEditing: false },
    { title: 'Beautiful And the Diamonds in the sky', isEditing: false }
  ]);

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  
  const handleEdit = (index) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].isEditing = true;
    setAudioTracks(updatedAudioTracks);
  };

  
  const handleSave = (index) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].isEditing = false;
    setAudioTracks(updatedAudioTracks);
  };

  const handleCancel = (index) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].isEditing = false;
    setAudioTracks(updatedAudioTracks);
  };

  
  const handleInputChange = (index, event) => {
    const updatedAudioTracks = [...audioTracks];
    updatedAudioTracks[index].title = event.target.value;
    setAudioTracks(updatedAudioTracks);
  };

  return (
    <div>
    <Navbar/>
    <div className='audionotes'>
      <div style={{ textAlign: 'center' }}>
       
        <button
          style={{
            marginBottom: '10px',
            backgroundColor: 'black',
            color: 'white',
            padding: '20px 40px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
       
          }}
          onClick={toggleVisibility}
        >
          {isVisible ? 'Hide' : 'Show'} Audio
        </button>
      </div>

  
      {isVisible && (
        <div>
          {audioTracks.map((track, index) => (
            <div
              className={`audio${index + 1}`}
              key={index}
              style={{
                backgroundColor: index === 0 ? 'beige' : index === 1 ? 'palevioletred' : index === 2 ? 'blanchedalmond' : index === 3 ? 'paleturquoise' : 'burlywood',
                marginTop: index === 0 ? '1%' : '4%',
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                border: '2px solid',
                borderRadius: '3px',
                padding: '25px',
                marginLeft: '10%',
                width: '30%',
                marginRight: '10px',
                height:'30%'
              }}
            >
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
              <audio controls style={{ marginTop: '10px' }}>
                <source src={`https://files.codingninjas.in/better-day-186374-1705648893.mp3`} type="audio/mp3" />
              </audio>
              
              {track.isEditing ? (
                <>
                  <button style={{ backgroundColor: 'green', color: 'white', width: '80px', height: '40px', margin: '5px' }} onClick={() => handleSave(index)}>Save</button>
                  <button style={{ backgroundColor: 'red', color: 'white', width: '80px', height: '40px', margin: '5px' }} onClick={() => handleCancel(index)}>Cancel</button>
                </>
              ) : (
                <button style={{ backgroundColor: 'black', color: 'white', width: '80px', height: '40px', margin: '5px' }} onClick={() => handleEdit(index)}>Edit</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Audio;
