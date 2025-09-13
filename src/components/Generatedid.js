import React from 'react';
import './Generatedid.css';
import { useNavigate } from 'react-router-dom';
//import { QRCode } from 'react-qrcode-logo';  // QR Code generator library

function GeneratedId() {
  const navigate = useNavigate();

  // Example data (in real app, you’ll pass this as props or get from state/store)
  const userData = {
    name: 'John Doe',
    age: '30',
    gender: 'Male',
    nationality: 'Indian',
    contact: '+91 9876543210',
    idMasked: 'XXXX-XXXX-7896',
    validity: '01 Jan 2024 - 31 Dec 2024',
    type: 'Individual',
    emergencyName: 'Jane Doe',
    emergencyContact: '+91 9123456780',
  };

  return (
    <div className="generated-container">
      <div className="generated-card">
        {/* <QRCode value="https://example.com/userid/123456" size={150} /> */}

        <div className="user-details">
          <h2>Tourist ID</h2>

          <div className="detail">
            <strong>Name:</strong> {userData.name}
          </div>
          <div className="detail">
            <strong>Age:</strong> {userData.age}
          </div>
          <div className="detail">
            <strong>Gender:</strong> {userData.gender}
          </div>
          <div className="detail">
            <strong>Nationality:</strong> {userData.nationality}
          </div>
          <div className="detail">
            <strong>Contact:</strong> {userData.contact}
          </div>
          <div className="detail">
            <strong>ID (Masked):</strong> {userData.idMasked}
          </div>
          <div className="detail">
            <strong>Validity:</strong> {userData.validity}
          </div>
          <div className="detail">
            <strong>Type:</strong> {userData.type}
          </div>
          <div className="detail">
            <strong>Emergency Contact Name:</strong> {userData.emergencyName}
          </div>
          <div className="detail">
            <strong>Emergency Contact No.:</strong> {userData.emergencyContact}
          </div>

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
