const validations = (data) => {


  let errors = {};

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!data.password) {
    errors.password = 'Password required';
  }
  return errors;
  
};

export default validations;
  