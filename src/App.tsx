import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ViewAllProperties from './pages/ViewAllProperties';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/view-all-properties" element={<ViewAllProperties />} />
        {/* <Route path="/property-details/:id" element={<PropertyDetails />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
