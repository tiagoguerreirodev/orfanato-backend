import { Request } from "express";
import multer from "multer";
import path from "path";
import crypto from "crypto";

export const multerConfig = {
	dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
	storage: multer.diskStorage({
		destination: (req: Request, file, cb) => {
			cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
		},
		filename: (req: Request, file, cb) => {
			crypto.randomBytes(16, (err, hash) => {
				if (err) cb(err, "");

				const fileName = `${hash.toString("hex")}-${file.originalname}`;

				cb(null, fileName);
			});
		},
	}),
	limits: {
		fileSize: 2 * 1024 * 1024,
	},
	fileFilter: (req: Request, file, cb) => {
		const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error("Invalid file type."));
		}
	},
};
