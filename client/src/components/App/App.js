import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import LandingPage from "../LandingPage/LandingPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </div>

    );
  }
}

export default App;
