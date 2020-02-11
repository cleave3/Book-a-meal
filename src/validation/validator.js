class Validator {
	static ValidateRegistration({ user_name, email, password }) {
		const errors = [];
		!user_name || user_name.trim() == '' ? errors.push('Username is required') : null;
		!email || email.trim() == '' ? errors.push('Email must be a valid email address') : null;
		!password || password.toString().length < 6 ? errors.push('password must be atleast 6 characters long') : null;
		!password || password.trim() == '' ? errors.push('password is required') : null;

		return errors;
	}

	static validateLogin({ user_name, password }) {
		const errors = [];
		!user_name || user_name.trim() == '' ? errors.push('Username is required') : null;
		!password || password.trim() == '' ? errors.push('password is required') : null;

		return errors;
	}

	static validateMeal({ meal_name, category_id, description, price }) {
		const errors = [];
		!meal_name || meal_name.trim() == '' ? errors.push('Username is required') : null;
		!category_id || category_id.trim() == '' ? errors.push('category is required') : null;
		!description || description.trim() == '' ? errors.push('description is required') : null;
		!price || price.trim() == '' ? errors.push('price is required') : null;

		return errors;
	}
}

export default Validator;
