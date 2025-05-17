 
 
 function validateInput(form) {
    for (const key in form) {
      if (form[key] === '') return `Missing value for "${key}"`;
    }
    return '';
  }
  
  export default validateInput
  