
import React from 'react';
import '../CSS/ResultDisplay.css'; // Import your CSS file
function ResultDisplay({ result }) {
    if (!result) return null;
  
    return (
      <div className="prediction-result">
        Prediction: <strong>{result}</strong>
      </div>
    );
  }
  
  export default ResultDisplay;
  