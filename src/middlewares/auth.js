import Response from '../utils/responseHelper';
import jwt from 'jsonwebtoken';

const { badRequest } = Response;

class Authenticate {
	static async authenticateUser(req, res, next) {
		const token = req.headers['token'];

		if (!token) return badRequest(res, 401, 'Please login to proceed');
		try {
			const payload = await jwt.verify(token, process.env.JWT_SECRET);
			if (!payload) return badRequest(res, 401, 'Access Denied');
			req.user = payload;
			next();
		} catch ({ message: error }) {
			badRequest(res, 401, error);
		}
	}

	static async authenticateAdmin(req, res, next) {
		const token = req.headers['token'];

		if (!token) return badRequest(res, 401, 'Please login to proceed');

		try {
			const payload = await jwt.verify(token, process.env.JWT_SECRET);
			if (!payload) return badRequest(res, 401, 'Access Denied');
			req.user = payload;
			const { is_admin } = req.user;
			if (!is_admin) return badRequest(res, 401, 'You are not allowed to perform this operation');
			next();
		} catch ({ message: error }) {
			badRequest(res, 401, error);
		}
	}
}

export default Authenticate;
