import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DisplayRadio from "./components/DisplayRadio";

function App() {
  return (
    <div className="main">
      <NavBar />
      <DisplayRadio />
      <Footer />
    </div>
  );
}

export default App;