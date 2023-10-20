import mongoose from "mongoose";
import env from "./env";
import app from "./app";

mongoose.connect(env.MONGO_DB_CONNECTION).then(() => {
  console.log("MongoDB is connection is live");
  app.listen(env.PORT, () => {
    console.log("backend server is up and running on port: " + env.PORT);
  });
});
