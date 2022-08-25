import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textfrom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [redMode, setRedMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#132032";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Manipulator - Dark Mode";
      // setInterval(() => {
      //   document.title = "Text Manipulator - Buy Premium";  Grab Users Attention
      // }, 3000);
      // setInterval(() => {
      //   document.title = "Text Manipulator - Install Now";  Grab Users Attention
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Manipulator - Light Mode";
    }
  };

  const toggleRedMode = () => {
    if (redMode === "light") {
      setRedMode("dark");
      document.body.style.backgroundColor = "#B25068";
      showAlert("Red Dark Mode has been enabled", "danger");
      document.title = "Text Manipulator - Red Dark Mode";
    } else {
      setRedMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Manipulator - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text Manipulator"
        mode={mode}
        redMode={redMode}
        toggleMode={toggleMode}
        toggleRedMode={toggleRedMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          heading="Enter Your Text To Analyze"
          mode={mode}
          redMode={redMode}
          showAlert={showAlert}
        />
        {/* // } */}
        {/* //   ></Route> */}
        {/* // </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
