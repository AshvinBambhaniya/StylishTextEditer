import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';

// let name = "Ashvin"
function App() {
  const [mode, setMode] = useState('light');

  const [checkBtnText, setcheckBtnText] = useState("Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  

  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      setcheckBtnText("Dark Mode")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
     
    } else {
      setMode("light")
      setcheckBtnText("Dark Mode")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      // document.title = "StylishText-LightMode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} checkBtnText={checkBtnText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
        {/* Some Changes
        --> word counter 
        --> copy text
        --> Active classes in home and about */}
    </>
  );
}

export default App;
