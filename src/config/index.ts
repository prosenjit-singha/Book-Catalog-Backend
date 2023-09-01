import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const jwt = {
  secret: process.env.JWT_SECRET_KEY as Secret,
  expire_in: process.env.JWT_EXPIRE_IN as string,
  refresh_secret: process.env.JWT_REFRESH_SECRET_KEY as Secret,
  refresh_expire_in: process.env.JWT_REFRESH_EXPIRE_IN as string,
};

const cookieOptions = {
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
};

export default {
  jwt,
  cookieOptions,
};
