import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ViewAllProperties from './pages/ViewAllProperties';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import PropertyDetails from './pages/PropertyDetails';
import FavoritesPage from './pages/Favourites';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/view-all-properties" element={<ViewAllProperties />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
        <Route path="/favourites" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
