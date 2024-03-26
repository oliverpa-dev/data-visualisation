"use strict";

const express = require("express");
const fs = require("fs");
const csv = require("csv");

// Express app
const app = express();
const port = 3000;

// Server static files
app.use(express.static("public"));

// Define route to handle file upload
app.post("/upload", (req, res) => {
  // Logic to handle file upload and save it
});

app.get("/visualize", (res, req) => {
  // Logic to handle CVS parsing and data visualization
});
