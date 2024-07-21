import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Route  path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
      </Router>
    </div>
  );
}

export default App;
