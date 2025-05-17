import axios from 'axios';

export async function predictCKD(form) {
  const formatted = {};
  for (const key in form) {
    if (["rbc", "pc", "pcc", "ba", "htn", "dm", "cad", "appet", "pe", "ane"].includes(key)) {
      formatted[key] = parseInt(form[key]);
    } else {
      formatted[key] = parseFloat(form[key]);
    }
  }

  const res = await axios.post('http://127.0.0.1:8001/predict', formatted);
  return res.data;
}

export default predictCKD;