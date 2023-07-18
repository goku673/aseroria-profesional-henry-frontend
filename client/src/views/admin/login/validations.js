const validationsAdmin = (admin) => {
    const errors = {};

    if(!admin.email) {
        errors.email = 'Required email';
    } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(admin.email)){
            errors.email = 'Email no valid';
        }
    }
    if(!admin.password) {
        errors.password = 'Required';
    }
    
    return errors;

}

export default validationsAdmin