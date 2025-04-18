import React, { useState } from 'react';
import '../styles/ProductPage.css'; // Reuse existing styles or create SignupPage.css

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    state: '',
    address: '',
    zipCode: ''
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

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.state.trim()) newErrors.state = 'State is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip Code is required.';
    else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) newErrors.zipCode = 'Invalid Zip Code.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('User Signed Up:', formData);
      setSubmitted(true);
      // TODO: Send formData to your backend API
    }
  };

  return (
    <div className="product-details-page">
      <h1>Signup</h1>
      {submitted ? (
        <p className="success-message">Signup successful! 🎉</p>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
              />
              {errors.state && <span className="error">{errors.state}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter your zip code"
            />
            {errors.zipCode && <span className="error">{errors.zipCode}</span>}
          </div>

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
              placeholder="Create a password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit" className="add-to-cart-button">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignupPage;
