import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Page.css'
const Page = () => {
  return (
    <div>
   <Navbar/>
    <div class="head1">
    <div class="banner"> 
        <h1>When your heart speaks,take good notes</h1>
        <p>Every Note is a brushstroke in the canvas of knowledge</p>
        
    <a href="/Login">Get started!!</a>
    </div>

<div class="container">
    <div class="text">
        <h1>Taking Notes from the past creating scribbles of my future</h1>
        <p></p>
    </div>

    <div class="main">
        <div class="single">
            <i class="fas fa-cloud-download-alt"></i>
            <p>You learn from MAKING them📝</p>
            <a href="/Text">TEXT</a>
        </div>
        <div class="single">
            <i class="fas fa-cogs"></i>
            <p>Vision beyond the life📱</p>
            <a href="/Image">IMAGE </a>
        </div>
        <div class="single">
        <i class="fas fa-wrench"></i>
        <p>Unlock your soundtrack🔉</p>
        <a href="/Audio">AUDIO </a>
    </div>
        <div class="single">
            <i class="fas fa-cogs"></i>
            <p>To keep your daily update✅</p>
           <a href="/Checklist">CHECKLIST</a>
        </div>
        <div class="single">
        <i class="fas fa-cloud-download-alt"></i>
        <p>Stick with your thoughts🕛</p>
       <a href="/Remainder">REMAINDER</a>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Page;
