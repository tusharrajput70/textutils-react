// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
// import About from "./component/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether Dark Mode is enabled or not
  const [alert, setAlert] = useState(null);

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
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    {/* // <BrowserRouter> */}
      {/* if i want somoething in our component which is totally depended upon input */}
      {/* These inputs are passed with component named as props */}
      <Navbar
        title="TextUtils"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Enter Text To Analyze"
                mode={mode}
              />
          {/* ></Route>
        </Routes> */}
      </div>

    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
