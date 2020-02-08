class Response {
	static async success(res, statusCode, data) {
		return res.status(statusCode).json({ status: true, message: 'success', data });
	}

	static async successMessage(res, statusCode, message) {
		return res.status(statusCode).json({ status: true, message });
	}

	static async badRequest(res, statusCode, error) {
		return res.status(statusCode).json({ status: false, error: [error] });
	}

	static async validationError(res, statusCode, error) {
		return res.status(statusCode).json({ status: false, errors: error.map(err => err) });
	}
}

export default Response;
