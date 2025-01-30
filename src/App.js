import React from "react";
import { useState } from 'react';
import './App.css'
import Alerts from './componants/Alerts';
import About from './componants/About';
import Navbar from './componants/Navbar';
 import Textform from './componants/Textform';
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
 const[mode, setMode] = useState('dark');
  const [alert, setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({ 
      msg:message,
    type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000  )
    
  }
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='green';
    
    showalert("Dark mode has benn enabled","success");
    document.title="Textutils-DarkMode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("Light mode has benn enabled","success");
    document.title="Textutils-LightMode";
  }
 }
  return (
    <>
   <Router>
<Navbar title="Textutils "mode={mode} aboutText="About"  toggleMode={toggleMode}/> 
{/* aboutText="About"  */}
<Alerts alert={alert}/>
{/* <Navbar /> */}
<div className="container my-3" >

<Routes>
          <Route exact path="/about" element={ <About />}>
            
          </Route>
          
          <Route  exact path="/" element={<Textform  showalert={showalert} heading="Enter Text To Alalyze Bellow"mode={mode}/>}>
          
          </Route>
        </Routes>



</div>
</Router>
</>
  );
}

export default App;
