
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)

  const [mode, setMode] = useState("light");
  document.body.style.fontFamily="calibri"
  document.body.style.transition="all 2s"

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const dark = () =>{
      setMode("dark");
      document.body.style.background="linear-gradient(0deg, rgba(69,54,54,0.9948354341736695) 0%, rgba(89,6,6,1) 21%, rgba(101,10,10,1) 59%, rgba(0,0,0,0.896796218487395) 100%) no-repeat fixed center";
      document.body.style.color="rgba(255,255,255,.55)";
      showAlert("Dark Mode has been Enabled", "success");
    }
    const light = () =>{
      setMode("light");
      document.body.style.backgroundImage="linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)";
      document.body.style.color="rgba(0,0,0,.55)";
      showAlert("Light Mode has been Enabled", "success");
    }
    const coral = () =>{
      setMode("dark");
      // document.getElementById("navbarSupportedContent").style.color="rgba(0,0,0,.55)";
      document.body.style.background="linear-gradient(0deg, rgba(106,82,75,0.9948354341736695) 9%, rgba(168,110,95,1) 49%, rgba(199,121,96,0.9612219887955182) 99%) no-repeat fixed center";
      document.body.style.color="rgba(255,255,255,.55)";
      showAlert("Coral Mode has been Enabled", "success");
    }
    const midnight = () =>{
      setMode("dark");
      // document.getElementById("navbarSupportedContent").style.color="rgba(0,0,0,.55)";
      document.body.style.background="rgb(2,0,36)"
      document.body.style.background="linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(25,25,112,1) 27%, rgba(15,98,169,1) 85%, rgba(13,114,181,1) 100%) no-repeat fixed center";
      document.body.style.color="rgba(255,255,255,.55)";
      showAlert("Midnight Mode has been Enabled", "success");
    }

  //   }
  //   else{
  //     setMode("light");
  //     setbtnText("Dark Mode");
  //     document.body.style.backgroundColor="White";
  //     document.body.style.color="rgba(0,0,0,.55)";
  //     showAlert("Light Mode has been Enabled", "dark");
  //   }
  return (
    <>
      <Navbar mode={mode} dark={dark} light={light} coral={coral} midnight={midnight}/> {/*btnText={btnText} */}
      <Alert alert={alert} mode={mode}/>
      <div className="container">
        <Textform showAlert={showAlert} heading="Enter your text to anaylise"  mode={mode}  />
        </div>
    </>
  );
}

export default App;
