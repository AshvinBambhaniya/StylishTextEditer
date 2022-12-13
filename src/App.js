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

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }  -->tut20

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls)  -->tut20
    if (mode === "light") {
      setMode("dark");
      setcheckBtnText("Light Mode")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
      // document.title = "StylishText-DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
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
      {/* <h1> this is me</h1> */}
      {/* <div classNameName="App">
        <header classNameName="App-header">
          <img src={logo} classNameName="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            classNameName="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React
          </a>
        </header>
      </div> */}
      {/* -->tut4 start */}

      {/* <div classNameName="blank">Lovely</div>  */}
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <h1>Hello {name}</h1>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia cumque voluptas repellendus beatae velit. Laboriosam iusto rerum ipsam voluptatibus delectus? Expedita non amet accusamus natus in impedit, dolore ullam.
      </div>*/}

      {/* --> tut4 End  */}

      {/* Tut5 -->start */}

      {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}

      {/* Tut5 -->End */}


      {/* Tut6 -->Start */}

      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}

      {/* Tut6 -->End */}

      {/* Tut7 -->Start */}

      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div> */}

      {/* Tut7 -->End */}


      {/* Tut8 -->Start */}

      {/* <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        <TextFormTut8 heading="Enter the text to analyze" />
      </div> */}

      {/* Tut8 -->End */}


      {/* Tut10 -->Start */}

      {/* <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        <About />
      </div> */}

      {/* Tut10 -->End */}


      {/* Tut11 -->Start */}

      {/* <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        <TextFormTut8 heading="Enter the text to analyze" />
      </div> */}

      {/* Tut11 -->End */}


      {/* Tut12 -->Start */}


      {/* <NavbarTut11 title="TextUtils" aboutText="About Us" mode={mode} checkBtnText={checkBtnText} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextFormTut11 heading="Enter the text to analyze" mode={mode} />
      </div> */}


      {/* Tut12 -->End */}


      {/* Tut13 -->Start */}


      {/* <NavbarTut11 title="TextUtils" aboutText="About Us" mode={mode} checkBtnText={checkBtnText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextFormTut11 showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div> */}


      {/* Tut13 -->End */}

      {/* Tut15 -->start */}

      {/* set Title */}
      {/* set metatag content  */}
      {/* Set favicon */}
      {/* chnge title name dinamicaly */}
      {/* set Interval for title change */}

      {/* Tut15 -->End */}


      {/* Tut16 -->Start */}

      {/* <Router>
        <NavbarTut11 title="TextUtils" aboutText="About Us" mode={mode} checkBtnText={checkBtnText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3"> */}
      {/* /users --> Component 1
        /users/home --> Component 2 */}
      {/* <Routes>
            <Route exact path="/about" element={<Abouttut16 mode={mode} />} />
            <Route exact path="/" element={<TextFormTut11 showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}


      {/* Tut16 -->End */}


      {/* Tut19 -->Start */}


      {/* <Router>
        <NavbarTut11 title="TextUtils" aboutText="About Us" mode={mode} checkBtnText={checkBtnText} toggleMode={toggleMode} />
        <AlertTut19 alert={alert} />
        <div className="container my-3"> */}
      {/* /users --> Component 1
        /users/home --> Component 2 */}
      {/* <Routes>
            <Route exact path="/about" element={<Abouttut19 mode={mode} />} />
            <Route exact path="/" element={<TextFormTut19 showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}


      {/* Tut19 -->End */}


      {/* Tut20 -->Start */}


      {/* <Router>
        <NavbarTut20 title="TextUtils" aboutText="About Us" mode={mode} checkBtnText={checkBtnText} toggleMode={toggleMode} />
        <AlertTut19 alert={alert} />
        <div className="container my-3"> */}
          {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Routes>
            <Route exact path="/about" element={<Abouttut19 mode={mode} />} />
            <Route exact path="/" element={<TextFormTut19 showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}


      {/* Tut20 -->End */}


      {/* Tut21 -->Start */}


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

      {/* Tut21 -->End */}



    </>
  );
}

export default App;
