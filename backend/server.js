import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payload from req.bdy

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// app.get("/", (req, res) => {
//   //root route http://localhost:5000/
//   res.send("Hello world! hhehhehhe");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
