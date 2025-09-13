import React, { useState } from 'react';
import './Individualrej.css';
import { useNavigate } from 'react-router-dom';

function IndividualRegistration() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>Individual Registration</h1>
        <p>Fill all your details correctly</p>

        {step === 1 && (
          <div className="form-step">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Age" />
            <input type="text" placeholder="Blood Group (Optional)" />

            <input type="text" placeholder="Nationality" />
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input type="text" placeholder="Aadhaar / Passport No." />
            <input type="text" placeholder="Contact No." />
            <input type="email" placeholder="Email" />

            <div className="file-upload">
              <div className="upload-area">
                <p>Drag & drop files or <span>Browse</span></p>
                <small>Supported formats: JPEG, PNG, GIF, PDF, Word, PPT</small>
              </div>
              <button>UPLOAD FILES</button>
            </div>

            <button className="next-btn" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <input type="text" placeholder="Places to Visit (comma separated)" />
            <input type="text" placeholder="Hotel (optional)" />

            <label>Arrival Date</label>
            <input type="date" />
            <label>Departure Date</label>
            <input type="date" />

            <input type="text" placeholder="Transport Details (optional)" />

            <h4>*Emergency Contacts (Optional)</h4>
            <input type="text" placeholder="Person's Name" />
            <input type="text" placeholder="Contact No." />

            <div className="form-buttons">
              <button onClick={prevStep}>Back</button>
              <button className="submit-btn">SUBMIT & GENERATE ID</button>
              <button>Save Draft</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndividualRegistration;
