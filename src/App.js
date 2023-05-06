import './App.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';




function App() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/submit")
  }

  return (
    <div className="App">
      <div className="left"></div>
      <div className="right">
        <h1>Welcome to YourHR</h1>
        <p>Find your dream job with YourHR <br /> - Your ultimate job search partner</p>
      <button type="button" class="btn btn-primary bttn" onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  );
}

export default App;
