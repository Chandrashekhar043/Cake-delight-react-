import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CakeList from "./components/CakeList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CakeList />
      <Footer />
    </div>
  );
}

export default App;
