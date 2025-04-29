import React from 'react';
import '../styles/global.css';

const Checkout = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-1">Checkout</h2>
      <div className="flex flex-space-between checkout-wrapper">

        {/* Shipping Information */}
        <div className="checkout-form card">
          <div className="card-body">
            <h3 className="card-title">Shipping Information</h3>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="ZIP Code" required />
              <input type="text" placeholder="Phone Number" required />
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="checkout-summary card">
          <div className="card-body">
            <h3 className="card-title">Order Summary</h3>
            <p className="card-text">Selected Items: $200 worth of goods</p>
            <p className="card-text">Shipping Estimate: $15</p>
            <p className="card-text"><strong>Total Value: $215</strong></p>
            <button className="button-primary mt-1" style={{ width: "100%" }}>
              Confirm Exchange
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
