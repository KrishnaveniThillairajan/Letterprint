import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/Navbar';
function Noteapp() {
  const [notes, setNotes] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = () => {
    if (titleValue.trim() !== '' && descriptionValue.trim() !== '') {
      const newNote = {
        title: titleValue,
        description: descriptionValue
      };
      if (editIndex !== null) {
        const newNotes = [...notes];
        newNotes[editIndex] = newNote;
        setNotes(newNotes);
        setEditIndex(null);
      } else {
        setNotes([...notes, newNote]);
      }
      setTitleValue('');
      setDescriptionValue('');
    }
  };

  const startEdit = (index) => {
    setTitleValue(notes[index].title);
    setDescriptionValue(notes[index].description);
    setEditIndex(index);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    if (index === editIndex) {
      setEditIndex(null);
      setTitleValue('');
      setDescriptionValue('');
    }
  };

  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  const notesCount = notes.length;

  return (
    <div>
    <Navbar/>
    <div>
  
      <h1 style={{ textAlign: 'center' }}>Notes Text</h1>
      <div className="search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            padding: '5px', 
            width: '15%', 
            borderRadius: '4px', 
            border: '1px solid #ccc',
          }}
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="note-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          style={{ 
            padding: '10px', 
            margin: '5px 0', 
            width: '20%', 
            borderRadius: '4px', 
            border: '1px solid #ccc',
          }}
        />
        <input
          placeholder="Description"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          style={{ 
            padding: '10px', 
            margin: '5px 0', 
            width: '20%', 
            borderRadius: '4px', 
            border: '1px solid #ccc',  
          }}
        />
        <div className="add-button-container">
          <button className="add-button" onClick={addNote}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <p style={{ textAlign: 'center' }}><b>Total notes: {notesCount}</b></p>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredNotes.map((note, index) => (
          <li key={index} style={{ 
            backgroundColor: 'papayawhip', 
            margin: '5px', 
            padding: '20px', 
            borderRadius: '8px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: '200px', 
            minWidth: '200px', 
            border: '1px solid #ccc' 
          }}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  placeholder="Title"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                />
                <input
                  placeholder="Description"
                  value={descriptionValue}
                  onChange={(e) => setDescriptionValue(e.target.value)}
                />
              </>
            ) : (
              <>
                <div><strong>{note.title}</strong></div>
                <div>{note.description}</div>
              </>
            )}
            {editIndex === index ? (
              <FontAwesomeIcon 
                icon={faSave} 
                onClick={addNote} 
                style={{ cursor: 'pointer' }} 
              />
            ) : (
              <div className="edit-delete-icons">
                <FontAwesomeIcon 
                  icon={faEdit} 
                  onClick={() => startEdit(index)} 
                  style={{ marginRight: '10px', cursor: 'pointer' }} 
                />
                <FontAwesomeIcon 
                  icon={faTrash} 
                  onClick={() => deleteNote(index)} 
                  style={{ cursor: 'pointer' }} 
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Noteapp;
