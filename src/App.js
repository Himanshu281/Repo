import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, SetMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      SetMode("dark");
      document.body.style.backgroundColor = "#00144e";
      showAlert("Dark mode enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setTimeout(() => {
      setAlert(null);
    }, 1000);
    setAlert({ msg: message, type: type });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Manipulator"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze/manipulate below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
