import "./style.css";
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
function Navbar(){
  const [c, setC]= useState(false)
//this is for to know if you have clicked your button or not!
  useEffect(()=>{
    console.log(`Icon state is ${c ? 'active' : 'inactive'}`);
},[c])
 
  function handleClick(){
    setC(!c)
    
}
  return(
    <div className="all">
    <nav>
    <div className='logo'>
      <h1>LOGO</h1>
    </div>
    {/* when you click bars(icon) the links are dispalyed, times(icon) and you close it... Two classes are created to show two instaces i.e at first "nav-container active" is active by default, and when you click the icon, className is changed to "nav-container". They render the property, that we have set in our css.    */}
  <div  className={ c ? "nav-container active ":"nav-container"}  >
    
  <Link className="link" to= '/'>
  Home
  </Link>
  <Link className="link" to= '/blog'>
  Blog
  </Link>

  </div>


  {/* icons */}
  <div className="icon">
  <i  id="icons" className={c ? 'fas fa-bars' : 'fas fa-times'} onClick={handleClick} />
   
  </div>
  </nav>
  </div>
  )
}
export default  Navbar;