const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!, after hte workflow update");
});

const port = process.env.PORT || 3000;

app.listen(port, console.log(`app is running at ${port}...`));
