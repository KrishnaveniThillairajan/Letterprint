import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

return(

 <div className="navebar">
            
 <img className="logo" src="./image/logo1.png"
 width="70px" height="70px"/>
            <ul>
                
                <li><Link to="/"><a href="#"><b>Home</b></a></Link></li>
                <li><Link to="/Text"><a href="#"><b>Text</b></a></Link></li>
                <li><Link to="/Image"><a href="#"><b>Image</b></a></Link></li>
                <li><Link to="/Checklist"><a href="#"><b>Checklist</b></a></Link></li>
                <li><Link to="/Audio"><a href="#"><b>Audio</b></a></Link></li>
                <li><Link to="/Remainder"><a href="#"><b>Remainder</b></a></Link></li>
                <Link to="/Profile"><img className="logo" src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                 width="60px" height="60px"/></Link>
                
            </ul>
        </div>
)
}
export default Navbar
