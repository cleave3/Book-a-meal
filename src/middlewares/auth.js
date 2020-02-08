import Response from '../utils/responseHelper';
import jwt from 'jsonwebtoken';

const { badRequest } = Response;

class Authenticate {
	static async authenticateUser(req, res, next) {
		const token = req.headers['token'];

		if (!token) return badRequest(res, 403, 'Please login to proceed');

		try {
			const payload = await jwt.verify(token, process.env.JWT_SECRET);
			req.user = payload;
			next();
		} catch (error) {
			badRequest(res, 401, 'Access Denied');
		}
	}

	static async authenticateAdmin(req, res, next) {
		const token = req.headers['token'];

		if (!token) return badRequest(res, 401, 'Please login to proceed');

		try {
			const payload = await jwt.verify(token, process.env.JWT_SECRET);

			req.user = payload;
			const { is_admin } = req.user;
			if (!is_admin)
				return badRequest(res, 401, 'Access Denied, you are not allowed to perform this operation');
			next();
		} catch (error) {
			badRequest(res, 401, 'Access Denied, Please login');
		}
	}
}

export default Authenticate;
