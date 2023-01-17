import React,{useState} from 'react';
import './toggler.css'
import { GrSun,GrMoon } from "react-icons/gr";
  function Toggler() {
     const [theme, setTheme] = useState('light');
     const [icon, setIcon]= useState(GrSun)
     const [color, setColor] = useState('gold');
     const themeStyle = theme === 'light' ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'black', color: 'white'};
     const handleChange = () => {
    
    // if (theme === 'dark') {
    //     setTheme('light');
    //     setIcon(GrSun);
    //   } else {
    //     setTheme('dark');
    //     setIcon(GrMoon);
    //   }
//above code does the same thing, below one is easier to read and write
  setTheme(theme === 'dark' ? 'light' : 'dark');
  setIcon(theme === 'dark' ? GrSun : GrMoon);
  setColor(color === 'gold' ? 'rgb(80, 78, 78)' : 'gold');
  
      };
  
     return (

        <div style={themeStyle}>
         <div id="container">           
        <i  onClick={handleChange} style={{backgroundColor: color}}>
        {icon}
        </i>
        </div>
       <div id='text'>
        Current theme: {theme}
        </div>
        <p>Done</p>
         
       </div>
       
     );
   }



export default Toggler


  