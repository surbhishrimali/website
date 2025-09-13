import React, { useState } from 'react';
import './Groupid.css';
import { useNavigate } from 'react-router-dom';

function GroupRegistration() {
  const [step, setStep] = useState(1);
  const [members, setMembers] = useState([{ id: 1 }]);
  const navigate = useNavigate();

  const addMember = () => {
    if (members.length < 10) {
      setMembers([...members, { id: members.length + 1 }]);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>Group Registration</h1>
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
            <button className="add-member-btn" onClick={addMember}>
              + Add Member
            </button>

            {members.map((member) => (
              <div className="member-form" key={member.id}>
                <h4>Member {member.id}</h4>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Age" />
                <input type="text" placeholder="Relation" />
                <input type="text" placeholder="Aadhaar/Passport" />
                <input type="text" placeholder="Blood Group (Optional)" />
                <input type="text" placeholder="Nationality" />
                <input type="text" placeholder="Contact" />
                <input type="email" placeholder="Email" />

                <div className="file-upload">
                  <div className="upload-area">
                    <p>Drag & drop files or <span>Browse</span></p>
                  </div>
                  <button>UPLOAD FILE</button>
                </div>
              </div>
            ))}

            <div className="form-buttons">
              <button onClick={prevStep}>Back</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <input type="text" placeholder="Places to Visit (comma separated)" />
            <input type="text" placeholder="Hotel (optional)" />

            <label>Arrival Date</label>
            <input type="date" />
            <label>Departure Date</label>
            <input type="date" />

            <input type="text" placeholder="Emergency Contact Person Name" />
            <input type="text" placeholder="Emergency Contact No." />

            <button onClick={() => navigate('/generated-id')} className="submit-btn">
              SUBMIT & GENERATE ID
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GroupRegistration;
