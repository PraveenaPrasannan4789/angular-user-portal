const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = 5000;

const app = express();
app.use(express.json());

app.use(cors());

app.listen(port, () => {
  console.log(`server listening to the port ${port}`);
});
