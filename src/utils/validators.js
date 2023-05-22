export const rutValidator = (value) => {
    const rutValid = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
    const resultValidation = rutValid.test(value);
    return resultValidation;
  };
  