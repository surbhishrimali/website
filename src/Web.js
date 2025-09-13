import React, { useState } from 'react';

function TouristIDRegistration() {
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const handleStartRegistration = () => {
    if (agreed) {
      alert('Proceed to registration');
    } else {
      alert('Please agree to terms first.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to{' '}
          <span className="text-blue-500">Tourist ID Generation</span> - Secure Your journey
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Register Quickly (individual or group). Verify members with OTP and receive a scannable QR Tourist ID.
        </p>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="agreement"
            checked={agreed}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="agreement" className="text-gray-700">
            I agree to Data processing for safety.{' '}
            <span className="text-blue-500 underline cursor-pointer">
              *Terms and Conditions
            </span>
          </label>
        </div>

        <button
          onClick={handleStartRegistration}
          className={`w-full py-3 rounded-lg text-white text-lg ${
            agreed ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'
          }`}
          disabled={!agreed}
        >
          Start Registration
        </button>

        <div className="mt-4 text-gray-500 text-sm text-center">
          ▼ Why we ask for Adhaar/Passport<br />
          To ensure tourist safety and quick verification at checkpoints. In this prototype, sensitive values are masked locally
        </div>
      </div>
    </div>
  );
}

export default TouristIDRegistration;
