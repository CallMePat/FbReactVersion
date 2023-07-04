import React from "react";
import './App.css';
import Login from './components/Login';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-fixed bg-cover bg-center bg-gray-200">
     <div>
        <Login/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
