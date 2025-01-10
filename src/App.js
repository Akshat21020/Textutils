import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (type,message) =>{
    setAlert({
      Type : type,
      msg : message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Success','Dark Mode is Activated!');
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Success','Light Mode is Activated!');
    }
  }

  return(
    <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
     <Alert alert={alert}></Alert>
     <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter Text to Analyse" mode={mode}></TextForm>
     </div>
    </>
   
  )
}

export default App;
