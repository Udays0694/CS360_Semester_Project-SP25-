import React, { useState } from 'react';
import '../styles/ProductPage.css'; // Reuse existing styles

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';

    if (!formData.password) newErrors.password = 'Password is required.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('User Logged In:', formData);
      setSubmitted(true);
      // TODO: Authenticate user with backend
    }
  };

  return (
    <div className="product-details-page">
      <h1>Login</h1>
      {submitted ? (
        <p className="success-message">Login successful! ✅</p>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit" className="add-to-cart-button">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
