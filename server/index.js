import express from "express";

const index = express();
const port = 5174;

index.listen(port, () => {
  console.log(`server is running on http:/localhost:${port}`);
});
