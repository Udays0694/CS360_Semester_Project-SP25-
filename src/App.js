import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';  // Global styles for the entire app

// Importing Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ElectronicsPage from './pages/ElectronicsPage';
import FurniturePage from './pages/FurniturePage';
import BooksPage from './pages/BooksPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SignupPage from './pages/SignupPage'; // ✅ Import the Signup page
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/furniture" element={<FurniturePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/signup" element={<SignupPage />} /> {/* ✅ Signup route added */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
