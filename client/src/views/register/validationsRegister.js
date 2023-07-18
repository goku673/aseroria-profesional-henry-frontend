const validationsRegister = (data) => {
    let errors = {};
  
    if (!data.name) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/.test(data.name)) {
      errors.name = 'Invalid name';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
      errors.email = 'Invalid email';
    }

    if (!data.password) {
      errors.password = 'Password is required'; 
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(data.password)) {
      errors.password ='Password must contain at least 8 characters, including letters, numbers, and special characters.';
    }

    if(data.password !== data.repeatPassword){
      errors.password = 'No match passwords';
      errors.repeatPassword = 'No match passwords'
    } else if (!data.repeatPassword){
      errors.repeatPassword = 'No match passwords'
    }

    return errors;
  };
  
  export default validationsRegister;
  