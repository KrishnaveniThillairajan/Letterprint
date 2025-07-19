
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Video.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Video = () => {
  return (
    <div>
    <Navbar/>
    <div className='body'>
    <h2>Video Notes:</h2>
    <div className="card-group">
  <div className='card'>
  <h4>Mahatma Gandhi</h4>
    <iframe className='video1' width="500" height="315" src="https://www.youtube.com/embed/y0uNJRQgNMM?si=0k2jB5NjvxLs8AxB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className="card-body">
      <h5 className="card-title">History</h5>
      <p className="card-text"><font Face="Bahnschrift">Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple in London, and was called to the bar in June 1891, at the age of 22. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years.</font></p>
      <p className="card-text"><small className="text-muted">Time:8:14</small></p>
    </div>
  </div>
  <div className="card">
  <h3>Ms Dhoni</h3>
  <iframe className='video2' width="500" height="315" src="https://www.youtube.com/embed/PWDQpEBq_pU?si=WcuOx9hPXgzEeN16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className="card-body1">
    
      <h5>Lifestyle</h5>
      <p ><font Face="Bahnschrift">Born in Ranchi, Dhoni made his first className debut for Bihar in 1999. 
      He made his debut for the Indian cricket team on 23 December 2004 in an ODI against Bangladesh and played his first test a year later against Sri Lanka. He became the first caption to hold the World cup after 28 years ,In 2007, he became the captain of the ODI side before taking over in all formats by 2008. Dhoni retired from test cricket in 2014, but continued playing in limited overs cricket till 2019. He has scored 17,266 runs in international cricket including 10,000 plus runs at an average of more than 50 in ODIs.</font></p>
      <p><small className="text-muted">Date:22.2.24  Time:10:15</small></p>
    </div>
  </div>
  <div className="card">
<h4>Foodies</h4>
  <iframe className='video3' width="500" height="315" src="https://www.youtube.com/embed/F2rhoIiX934?si=KheyO8I8s9bzD-Xb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className="card-body3">
      <h5 >Favourite Food</h5>
      <p >
      <ul type="circle">
      <li>Biriyani</li>
      <li>Brownies</li>
      <li>Noodles</li></ul>
      <font Face="Bahnschrift">
      Steps to Cook:
      How was biryani made?
Chicken Biryani Recipe - Swasthi's Recipes
The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
</font>
</p>
      <p className="card-text"><small className="text-muted">Date: 31.2.24 Time:9:00</small></p>
    </div>
  </div><br></br>

  
</div>
</div>
</div>


  )
}

export default Video