import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card1.css';

const initialCards = [
  { id: 1, img: "https://techvccloud.mediacdn.vn/2020/8/14/148-15974015288501803718399-crop-15974015349661210457462.png", title: "React✨", description: "React is a JavaScript library for building user interfaces. React is used to build single-page applications.", figcaption: "Date:22/2/24 Time:8:19" },
  { id: 2, img: "https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280", title: "AI", description: "Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of living beings, primarily of humans.", figcaption: "Date:28/10/24 Time:5:00" },
];

const Card1 = () => {
  const [cards, setCards] = useState(initialCards);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');

  const addCard = () => {
    const newCard = {
      id: cards.length + 1, 
      img: newImage !== '' ? newImage : "https://via.placeholder.com/150", 
      title: newTitle,
      description: newDescription,
      figcaption: "New NOTE"
    };
    setCards([...cards, newCard]);
    setNewTitle('');
    setNewDescription('');
    setNewImage('');
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div>
    <Navbar/>
      <center><h2>Image Notes:</h2></center>
      <center>
        <div style={{ marginBottom: '10px' }}>
          <input type="text" placeholder="Enter title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} style={{ width: '150px', marginRight: '10px' }} />
          <input type="text" placeholder="Enter description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} style={{ width: '150px', marginRight: '10px' }} />
          <input type="text" placeholder="Enter image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} style={{ width: '300px', marginRight: '10px' }} />
          <button onClick={addCard} style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add New Note:</button>
        </div>
      </center>

      <section className="fl-card-list">
        {cards.map((card) => (
          <aside className="fl-card" key={card.id}>
            <figure>
              <img className="fl-card-img" src={card.img} alt="" height="250" width="400" />
              <figcaption>{card.figcaption}</figcaption>
            </figure>
            <div className="fl-card-body">
              <h3 className="fl-card-title">{card.title}</h3>
              <p className="fl-card-content">{card.description}</p>
              <button onClick={() => deleteCard(card.id)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
            </div>
          </aside>
        ))}
      </section>
    </div>
  );
};

export default Card1;
