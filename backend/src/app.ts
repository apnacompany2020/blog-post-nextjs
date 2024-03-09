import express, { json, Request } from "express";
import blogPostRoutes from "./routes/blog-post";
import cors, { CorsOptions } from "cors";
import env from "./env";
import morgan from "morgan";

const whitelist = env.ALLOWED_ORIGINS.split(",");
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log(origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
};
const app = express();
app.use(json());
app.use(morgan("dev"));
app.use(cors<Request>(corsOptions));
app.use("/posts", blogPostRoutes);

export default app;
