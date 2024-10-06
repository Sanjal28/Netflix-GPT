export const validateMessage = (email, password,name) => {
    // Use  regex(/.../) from online for validation
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid=/^[a-zA-Z ,.'-]+$/.test(name)
  
    
    // console.log("Email validation result:", isEmailValid);
    // console.log("Password validation result:", isPasswordValid);
    // console.log("Name validation result:", isNameValid);
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if(!isNameValid) return "Name is not valid"
    return null;
  };