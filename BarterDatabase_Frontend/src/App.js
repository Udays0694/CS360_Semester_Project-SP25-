import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';  // Global styles for the entire app

// Importing Components
import Header from './components/Header'; // Default import
import Footer from './components/Footer'; // Default import
import HomePage from './pages/HomePage'; // Default import
import ElectronicsPage from './pages/ElectronicsPage'; // Default import
import FurniturePage from './pages/FurniturePage'; // Default import
import BooksPage from './pages/BooksPage'; // Default import
import ProductDetailsPage from './pages/ProductDetailsPage'; // Default import

// App Component
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Rendering Header component */}

        {/* Defining Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/furniture" element={<FurniturePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>

        <Footer /> {/* Rendering Footer component */}
      </div>
    </Router>
  );
};

export default App;
