import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { getProducts } from '../services/api';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <main className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Barter Database</h1>
          <p className="hero-subtitle">
            A smarter way to trade. Exchange what you don’t need for what you truly want.
          </p>
          <a href="/about" className="cta-button">Learn More</a>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="/assets/images/home_background.jpg"
            alt="Barter community exchange illustration"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-heading">Why Choose Barter Database?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Zero Waste, Full Value</h3>
            <p>Give unused items a second life and discover new treasures at no cost.</p>
          </div>
          <div className="feature-card">
            <h3>Community Driven</h3>
            <p>Connect with local users and build trust through fair, transparent trades.</p>
          </div>
          <div className="feature-card">
            <h3>Simple & Secure</h3>
            <p>Easy-to-use platform with safety measures to ensure smooth exchanges.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;