// utils/validators.js

const validateFname = (fname) => {
    // Allows alphabets and spaces, and ensures at least one character
    const nameRegex = /^[a-zA-Z ]{1,}$/;
    return nameRegex.test(fname);
  };
  
  const validateLname = (lname) => {
    // Allows alphabets and spaces, and ensures at least one character
    const nameRegex = /^[a-zA-Z ]{1,}$/;
    return nameRegex.test(lname);
  };
  
  const validateEmail = (email) => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    // Password must be at least 8 characters long
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
  };
  
  module.exports = { validateFname, validateLname, validateEmail, validatePassword };
  