import React, { useState } from 'react';
import './GenerateNumber.css';

function GenerateNumber() {
  const [controlNumber, setControlNumber] = useState('');
  const [generated, setGenerated] = useState(false);

  const generateNumber = () => {
    const randomNumber = 'CN-' + Math.floor(100000 + Math.random() * 900000);
    setControlNumber(randomNumber);
    setGenerated(true);
  };

  return (
    <div className="generate-container">
      <h2>Generate Control Number</h2>
      <button onClick={generateNumber}>Generate</button>

      {generated && (
        <div className="result-box">
          <p>Your Control Number:</p>
          <h3>{controlNumber}</h3>
        </div>
      )}
    </div>
  );
}

export default GenerateNumber;
