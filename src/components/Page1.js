import React from 'react';
import './Page1.css';
import { useNavigate } from 'react-router-dom';



function ChooseRegistrationType() {
   const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Choose Registration Type</h2>
      <p>Select whether you are registering alone or as a group</p>

      

 
    <div>
      

      <button onClick={() => navigate('/individual-registration')}>
        Individual Tourist ID
      </button>

      <button>Group Tourist ID</button>
    </div>
 

      <div className="card-container">
        <div className="card">
          <button onClick={() => navigate('/individual-registration')}>
       
      
          <h3>Individual Tourist ID</h3>
          <p>Single traveler – Quick flow (~2min)</p>
          </button>
        </div>

        <div className="card">
          <h3>Group Tourist ID</h3>
          <p>Family or Group registration (up to 10 members)</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseRegistrationType;
