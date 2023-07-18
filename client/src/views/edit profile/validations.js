const validationsEdit = (edit) => {
    const errors = {};
    
    if (!edit.name) {
        errors.name = 'Name is required';
      } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/.test(edit.name)) {
        errors.name = 'Invalid name';
      }

    if (!edit.password) {
        errors.password = 'Password is required'; 
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(edit.password)) {
        errors.password ='Password must contain at least 8 characters, including letters, numbers, and special characters.';
      }
  
      if(edit.password !== edit.repeatPassword){
        errors.password = 'No match passwords';
        errors.repeatPassword = 'No match passwords'
      } else if (!edit.repeatPassword){
        errors.repeatPassword = 'No match passwords'
      }


    return errors;
}

export default validationsEdit;


