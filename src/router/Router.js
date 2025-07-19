import React from 'react'
import Card1 from '../Card1/Card1'
import Audio from '../Audio/Audio'
import Noteapp from '../noteapp/Noteapp'
import Checklist from '../checklist/Checklist'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Page from '../Page/Page'
import Sticky from '../Sticky/Sticky'
import Login from '../login/Login'
import Profile from '../Profile/Profile'
import Signup from '../signup/Signup'


const Router = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Page/>}/>

    <Route path="/Text" element={<Noteapp/>}/>
    <Route path="/Image" element={<Card1/>}/>
    <Route path="/Checklist" element={<Checklist/>}/>
    <Route path="/Audio" element={<Audio/>}/>
    <Route path="/Remainder" element={<Sticky/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    </Routes></BrowserRouter>
    </div>
  )
}

export default Router