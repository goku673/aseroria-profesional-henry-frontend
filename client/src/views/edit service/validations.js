const validationsService = (service) => {
    const errors = {};
    if(!service.name){
        errors.name = 'Required'
    }

    if(!service.description){
        errors.description = 'Required'
    }

    if(!service.price){
        errors.price = 'Required'
    }
    return errors;
}

export default validationsService;