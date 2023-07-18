const validationReview = (review) => {
  const errors = {};
  //logica valiación

  if (!review.reviewDescription) {
    errors.message = 'field cant be empty';
  }
  if (!review.score) {
    errors.message = 'seleccione cuantas star';
  }

  return errors;
};

export default validationReview;
