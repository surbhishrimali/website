import React, { useState } from 'react';
import './Groupid.css';
import { useNavigate } from 'react-router-dom';

function GroupRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    bloodGroup: '',
    nationality: '',
    gender: '',
    aadhaar: '',
    contact: '',
    email: '',
    members: [{ id: 1, fullName: '', age: '', relation: '', aadhaar: '', bloodGroup: '', nationality: '', contact: '', email: '' }],
    placesToVisit: '',
    hotel: '',
    arrivalDate: '',
    departureDate: '',
    emergencyName: '',
    emergencyContact: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index][name] = value;
    setFormData({ ...formData, members: updatedMembers });
  };

  const addMember = () => {
    if (formData.members.length < 10) {
      setFormData({
        ...formData,
        members: [...formData.members, { id: formData.members.length + 1, fullName: '', age: '', relation: '', aadhaar: '', bloodGroup: '', nationality: '', contact: '', email: '' }],
      });
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
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Group Leader Name" />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="45" />
            </div>

            <div className="form-group">
              <label>Blood Group (Optional)</label>
              <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="O+" />
            </div>

            <div className="form-group">
              <label>Nationality</label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Indian" />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Aadhaar / Passport No.</label>
              <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} placeholder="XXXX-XXXX-7896" />
            </div>

            <div className="form-group">
              <label>Contact No.</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="+91 9876543210" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" />
            </div>

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

            {formData.members.map((member, index) => (
              <div className="member-form" key={member.id}>
                <h4>Member {member.id}</h4>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" value={member.fullName} onChange={(e) => handleMemberChange(index, e)} placeholder="John Doe" />
                </div>

                <div className="form-group">
                  <label>Age</label>
                  <input type="text" name="age" value={member.age} onChange={(e) => handleMemberChange(index, e)} placeholder="30" />
                </div>

                <div className="form-group">
                  <label>Relation</label>
                  <input type="text" name="relation" value={member.relation} onChange={(e) => handleMemberChange(index, e)} placeholder="Brother" />
                </div>

                <div className="form-group">
                  <label>Aadhaar/Passport</label>
                  <input type="text" name="aadhaar" value={member.aadhaar} onChange={(e) => handleMemberChange(index, e)} placeholder="XXXX-XXXX-7896" />
                </div>

                <div className="form-group">
                  <label>Blood Group (Optional)</label>
                  <input type="text" name="bloodGroup" value={member.bloodGroup} onChange={(e) => handleMemberChange(index, e)} placeholder="A+" />
                </div>

                <div className="form-group">
                  <label>Nationality</label>
                  <input type="text" name="nationality" value={member.nationality} onChange={(e) => handleMemberChange(index, e)} placeholder="Indian" />
                </div>

                <div className="form-group">
                  <label>Contact</label>
                  <input type="text" name="contact" value={member.contact} onChange={(e) => handleMemberChange(index, e)} placeholder="+91 9876543210" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={member.email} onChange={(e) => handleMemberChange(index, e)} placeholder="example@email.com" />
                </div>

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
            <div className="form-group">
              <label>Places to Visit (comma separated)</label>
              <input type="text" name="placesToVisit" value={formData.placesToVisit} onChange={handleChange} placeholder="Place1, Place2" />
            </div>

            <div className="form-group">
              <label>Hotel (optional)</label>
              <input type="text" name="hotel" value={formData.hotel} onChange={handleChange} placeholder="Hotel Name" />
            </div>

            <div className="form-group">
              <label>Arrival Date</label>
              <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Departure Date</label>
              <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Emergency Contact Person Name</label>
              <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} placeholder="Jane Doe" />
            </div>

            <div className="form-group">
              <label>Emergency Contact No.</label>
              <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="+91 9123456780" />
            </div>

            <button
              className="submit-btn"
              onClick={() => navigate('/generated-id', { state: formData })}
            >
              SUBMIT & GENERATE ID
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GroupRegistration;

