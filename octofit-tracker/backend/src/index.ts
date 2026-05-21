import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/octofit_tracker";

app.get("/health", (_req, res) => {
  res.json({ status: "ok", mongodbUri: MONGODB_URI });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`MongoDB URI: ${MONGODB_URI}`);
});
