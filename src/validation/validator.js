import Response from '../utils/responseHelper';

class Validator {
  static ValidateRegistration(data) {
    const errors = [];
    data.firstName.trim() == '' ? errors.push('First Name is required') : null;
    data.lastName.trim() == '' ? errors.push('Last Name is required') : null;
    data.email.trim() == '' ? errors.push('Email must be a valid email address') : null;
    data.password.trim() == '' || data.password.toString().length < 6 ? errors.push('Password must be atleast 6 characters long') : null;

    return errors;
  }

  static validateLogin(data) {
    const errors = [];
    data.email.trim() == '' ? errors.push('Email is required') : null;
    data.password.trim() == '' ? errors.push('Password is required') : null;

    return errors;
  }
  
}

export default Validator;