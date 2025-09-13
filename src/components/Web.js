import React from 'react';
import './Web.css';
import { useNavigate } from 'react-router-dom';

function Web() {
  const navigate = useNavigate();

  return (
    <div className="web-container">
      <div className="web-card">
        <h1>
          Welcome to <span className="highlight">Tourist ID Generation</span> - Secure Your journey
        </h1>
        <p>Register Quickly (individual or group). Verify members with OTP and receive a scannable QR Tourist ID.</p>

        <div className="checkbox-group">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            I agree to Data processing for safety.* <a href="#">Terms and Conditions</a>
          </label>
        </div>

        <button className="start-button" onClick={() => navigate('/page1')}>
          Start Registration
        </button>

        <p className="footer-note">
          ▼ Why we ask for Aadhaar/Passport <br />
          To ensure tourist safety and quick verification at checkpoints. In this prototype, sensitive values are masked locally.
        </p>
      </div>
    </div>
  );
}

export default Web;
