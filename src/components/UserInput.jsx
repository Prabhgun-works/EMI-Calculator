import React from 'react';

import img from '../assets/economics.png'


export default function UserInput({ onChange, userInput }) {
  const handleChange = (field, value) => {
    const numericValue = value === "" ? "" : Number(value); 
    onChange(field, numericValue);
  };
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Loan Amount</label>
          <input
            type="number"
            required
            value={userInput.principal === 0 ? "" : userInput.principal}
            onChange={(e) => handleChange("principal", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Rate Of Interest</label>
          <input
            type="number"
            required
            value={userInput.annualInterestRate === 0 ? "" : userInput.annualInterestRate}
            onChange={(e) => handleChange("annualInterestRate", e.target.value)}
          />
        </p>
          <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.durationInMonths === 0 ? "" : userInput.durationInMonths}
            onChange={(e) => handleChange("durationInMonths", e.target.value)}
          />
          </p>
      </div>

    </section>
        
    
  );
}



  
  

  