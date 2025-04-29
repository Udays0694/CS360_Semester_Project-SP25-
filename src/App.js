import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css'; // Global styles for the entire app

// Importing Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage'; // Updated import
import ProductDetailsPage from './pages/ProductDetailsPage';
import SignupPage from './pages/SignupPage';
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
          <Route path="/products/:category" element={<ProductsPage />} /> {/* Dynamic product page */}
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/signup" element={<SignupPage />} />
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
