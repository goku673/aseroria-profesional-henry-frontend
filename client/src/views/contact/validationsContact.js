const validationsContact = (form) => {
    const errors = {};

    if(!form.name){
        errors.name = 'Required'
    }

    if (!form.email) {
        errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Invalid email format';
    }

    if(!form.message){
        errors.message = 'Required'
    }


    return errors;
}

export default validationsContact;