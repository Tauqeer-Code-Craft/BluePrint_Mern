import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router & Routes
import HomePage from './Pages/HomePage'; // Your HomePage component
import About from './Components/About';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<HomePage />} />  {/* Home Page */}
        <Route path="/aboutus" element={<About />} />  {/* Example other page */}
      </Routes>
    </Router>
  );
}

export default App;
