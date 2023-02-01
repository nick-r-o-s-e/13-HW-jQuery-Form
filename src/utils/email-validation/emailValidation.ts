const emailValidation = (email: string) => {
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? true : false;
};

export default emailValidation;
