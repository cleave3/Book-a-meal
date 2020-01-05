class Response {
  static async success(res, statusCode, data) {
    return res.status(statusCode).json({ status: true, message: 'success', data });
  }

  static async badRequest(res, statusCode, error) {
    return res.status(statusCode).json({ status: false, message: error });
  }
}

export default Response;
