import multer from 'multer';

const storage = multer.diskStorage({
	fileFilter: (req, file, cb) => {
		if (!file.mimetype.match(/jpeg|jpg|png|gif$i/)) {
			cb('Unsupported file type. Image should be in jpg,jpeg, png or gif format', false);
		}
		if (file.size > 200000) {
			cb('File too large, should not exceed 200kb', false);
		}
		cb(null, true);
	},
	destination: (req, file, cb) => {
		cb(null, 'src/public/images/');
	},
	filename: (req, file, cb) => {
		const fileExt = file.mimetype.split('/')[1];
		cb(null, file.fieldname + '-' + Date.now() + '.' + fileExt);
	}
});

const upload = multer({ storage: storage });

export default upload;
