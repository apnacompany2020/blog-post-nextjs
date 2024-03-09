import "dotenv/config";
import { cleanEnv, port, str } from "envalid";

const env = cleanEnv(process.env, {
  PORT: port(),
  MONGO_DB_CONNECTION: str(),
  ALLOWED_ORIGINS: str(),
});

export default env;
