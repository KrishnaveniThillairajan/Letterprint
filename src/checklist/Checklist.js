import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
const Checklist = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { id: Date.now(), text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  const handleCheckboxChange = (itemId) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }));
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const handleClearAll = () => {
    setItems([]);
  };

  const totalItems = items.length;
  const checkedItems = items.filter(item => item.checked).length;

  return (
    <div>
    <Navbar/>
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '50px auto', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ marginBottom: '1rem', color: '#333', textAlign: 'center', fontSize: '24px', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>Checklist</h2>
      <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item..."
          style={{ flex: '1', padding: '10px', border: 'none', borderBottom: '2px solid #007bff', borderRadius: '0', outline: 'none', fontSize: '16px' }}
        />
        <button onClick={handleAddItem} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginLeft: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>Add</button>
      </div>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          Total items: {totalItems} | Checked items: {checkedItems}
        </div>
        <button onClick={handleClearAll} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>Clear All</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
                style={{ marginRight: '10px', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '16px', textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span>
            </div>
            <button onClick={() => handleDeleteItem(item.id)} style={{ backgroundColor: 'transparent', border: 'none', color: '#ff0000', cursor: 'pointer', fontSize: '16px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Checklist;
