import React from 'react';
import './Generatedid.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

function GeneratedId() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve passed formData directly
  const formData = location.state || {};

  // Use aadhaar or email as unique QR code value fallback to 'Unknown ID'
  const qrValue = formData.aadhaar || formData.email || 'Unknown ID';

  return (
    <div className="generated-container">
      <div className="generated-card">

        <QRCodeCanvas value={qrValue} size={200} />

        <div className="user-details">
          <h2>🆔 Tourist Information</h2>

          <div className="detail"><strong>Full Name:</strong> {formData.fullName || 'Unknown'}</div>
          <div className="detail"><strong>Age:</strong> {formData.age || 'Unknown'}</div>
          <div className="detail"><strong>Gender:</strong> {formData.gender || 'Unknown'}</div>
          <div className="detail"><strong>Nationality:</strong> {formData.nationality || 'Unknown'}</div>
          <div className="detail"><strong>Contact:</strong> {formData.contact || 'Unknown'}</div>
          <div className="detail"><strong>Email:</strong> {formData.email || 'Unknown'}</div>
          <div className="detail"><strong>Aadhaar / Passport No.:</strong> {formData.aadhaar || 'Unknown'}</div>
          <div className="detail"><strong>Places to Visit:</strong> {formData.placesToVisit || 'Unknown'}</div>
          <div className="detail"><strong>Hotel:</strong> {formData.hotel || 'N/A'}</div>
          <div className="detail"><strong>Arrival Date:</strong> {formData.arrivalDate || 'Unknown'}</div>
          <div className="detail"><strong>Departure Date:</strong> {formData.departureDate || 'Unknown'}</div>
          <div className="detail"><strong>Transport Details:</strong> {formData.transportDetails || 'N/A'}</div>
          <div className="detail"><strong>Emergency Contact Name:</strong> {formData.emergencyName || 'Unknown'}</div>
          <div className="detail"><strong>Emergency Contact No.:</strong> {formData.emergencyContact || 'Unknown'}</div>

          <div className="action-buttons">
            <button>Download PDF</button>
            <button>Download PNG</button>
            <button onClick={() => navigate('/')}>
              Create Another ID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneratedId;
