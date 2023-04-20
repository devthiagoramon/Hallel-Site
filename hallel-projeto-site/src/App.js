import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import RoutesApp from "./routes";

function App() {
  return (
      <div className = "page-container">
        
          <div className = "content-wrap">
            <RoutesApp />
          
          <Footer/>
          </div>
      </div>
  );
}
export default App;
