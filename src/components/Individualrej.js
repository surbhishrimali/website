import React, { useState, useRef } from 'react';
import './Individualrej.css';
import { useNavigate } from 'react-router-dom';

function IndividualRegistration() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    bloodGroup: '',
    nationality: '',
    gender: '',
    aadhaar: '',
    contact: '',
    email: '',
    uploadedFile: null,
    placesToVisit: '',
    hotel: '',
    arrivalDate: '',
    departureDate: '',
    transportDetails: '',
    emergencyName: '',
    emergencyContact: '',
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, uploadedFile: e.target.files[0] });
  };

  const isFormValid = () => {
  return (
    formData.fullName &&
    formData.age &&
    formData.nationality &&
    formData.gender &&
    formData.aadhaar &&
    formData.contact &&
    formData.email &&
    formData.placesToVisit &&
    formData.arrivalDate &&
    formData.departureDate
  );
};


  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>Individual Registration</h1>
        <p>Fill all your details correctly</p>

        {step === 1 && (
          <div className="form-step">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="30" />
            </div>

            <div className="form-group">
              <label>Blood Group (Optional)</label>
              <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="A+" />
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

                 <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />

              <button type="button" onClick={openFileDialog}>
                UPLOAD FILES
              </button>

              {formData.uploadedFile && (
                <p><strong>Uploaded:</strong> {formData.uploadedFile.name}</p>
              )}

            </div>

            <button className="next-btn" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
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
              <label>Transport Details (optional)</label>
              <input type="text" name="transportDetails" value={formData.transportDetails} onChange={handleChange} placeholder="Bus, Car etc." />
            </div>

            <h4>*Emergency Contacts (Optional)</h4>

            <div className="form-group">
              <label>Person's Name</label>
              <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} placeholder="Jane Doe" />
            </div>

            <div className="form-group">
              <label>Contact No.</label>
              <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="+91 9123456780" />
            </div>

            <div className="form-buttons">
              <button onClick={prevStep}>Back</button>
              <button
                className="submit-btn"
                onClick={() => navigate('/generated-id' , { state: formData })}
                disabled={!isFormValid()}
              >
                SUBMIT & GENERATE ID
              </button>
              <button>Save Draft</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndividualRegistration;
