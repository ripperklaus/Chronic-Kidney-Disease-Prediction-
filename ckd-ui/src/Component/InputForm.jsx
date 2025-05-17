import { useState } from 'react';
import predictCKD from '../api/predictCkd';
import validateInput from '../utils/validateInput';
import ResultDisplay from './Resultdisplay';
import '../CSS/InputForm.css'; // Import your CSS file

const initialState = {
  age: '', bp: '', sg: '', al: '', su: '',
  rbc: '', pc: '', pcc: '', ba: '',
  bgr: '', bu: '', sc: '', sod: '', pot: '',
  hemo: '', pcv: '', wc: '', rc: '',
  htn: '', dm: '', cad: '', appet: '', pe: '', ane: '',
};

const fieldLabels = {
  age: "Age",
  bp: "Blood Pressure",
  sg: "Specific Gravity",
  al: "Albumin",
  su: "Sugar",
  rbc: "Red Blood Cells",
  pc: "Pus Cell",
  pcc: "Pus Cell Clumps",
  ba: "Bacteria",
  bgr: "Blood Glucose Random",
  bu: "Blood Urea",
  sc: "Serum Creatinine",
  sod: "Sodium",
  pot: "Potassium",
  hemo: "Hemoglobin",
  pcv: "Packed Cell Volume",
  wc: "White Blood Cell Count",
  rc: "Red Blood Cell Count",
  htn: "Hypertension",
  dm: "Diabetes Mellitus",
  cad: "Coronary Artery Disease",
  appet: "Appetite",
  pe: "Pedal Edema",
  ane: "Anemia",
};

const dropdownFields = {
  rbc: ["Normal", "Abnormal"],
  pc: ["Normal", "Abnormal"],
  pcc: ["Present", "Not Present"],
  ba: ["Present", "Not Present"],
  htn: ["Yes", "No"],
  dm: ["Yes", "No"],
  cad: ["Yes", "No"],
  appet: ["Good", "Poor"],
  pe: ["Yes", "No"],
  ane: ["Yes", "No"]
};

export default function InputForm() {
  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateInput(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await predictCKD(form);
      setResult(response.prediction);
      setError('');
    } catch (err) {
      setError('API error. Please try again.');
    }
  };

  return (
    <div className="Form-container">
      <form onSubmit={handleSubmit} className="Submit-Form">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label className="Field-label">{fieldLabels[key]}</label>
            {dropdownFields[key] ? (
              <select
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="Input-Field"
              >
                <option value="">Select</option>
                {dropdownFields[key].map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="Input-Field"
              />
            )}
          </div>
        ))}
        <div className="submit-Button">
          <button type="submit" className="Button-Predict">
            Predict
          </button>
          {error && <p className="Error-Message">{error}</p>}
        </div>
        
      </form>
      <ResultDisplay result={result} />
    </div>
  );
}
