import React from 'react';
import './Generatedid.css';
import { useLocation, useNavigate } from 'react-router-dom';
//import { QRCode } from 'react-qrcode-logo';  // QR Code generator library

function GeneratedId() {
  const navigate = useNavigate();
  const location = useLocation();

  // Example data (in real app, you’ll pass this as props or get from state/store)
 const userData = location.state || {};

  return (
    <div className="generated-container">
      <div className="generated-card">
        {/* <QRCode value="https://example.com/userid/123456" size={150} /> */}

        <div className="user-details">
          <h2>Tourist ID</h2>

           <div className="detail"><strong>Name:</strong> {userData.fullName}</div>
          <div className="detail"><strong>Age:</strong> {userData.age}</div>
          <div className="detail"><strong>Gender:</strong> {userData.gender}</div>
          <div className="detail"><strong>Nationality:</strong> {userData.nationality}</div>
          <div className="detail"><strong>Contact:</strong> {userData.contact}</div>
          <div className="detail"><strong>ID (Masked):</strong> XXXX-XXXX-7896</div>
          <div className="detail"><strong>Validity:</strong> 01 Jan 2024 - 31 Dec 2024</div>
          <div className="detail"><strong>Type:</strong> Individual</div>
          <div className="detail"><strong>Emergency Contact Name:</strong> {userData.emergencyName}</div>
          <div className="detail"><strong>Emergency Contact No.:</strong> {userData.emergencyContact}</div>

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
