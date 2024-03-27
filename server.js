"use strict";

const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

//Express app
const app = express();
const port = 3000;

//Server static files
app.use(express.static("public"));

//Define route to handle file upload
app.post("/upload", (req, res) => {
  // Logic to handle file upload and save it
});

//Logic to handle CVS parsing and data visualization
app.get("/visualize", (req, res) => {
  //Read cvs file
  const results = [];
  fs.createReadStream("./public/data/cars.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      const values = results.map((entry) => ({
        gear: entry.gear,
        hp: entry.hp,
        model: entry[""],
      }));

      // Create chart using Chart.js
      const dataConfig = {
        labels: values.map((entry) => entry.model),
        datasets: [
          {
            label: "My First Data set",
            data: values.map((entry) => entry.hp),
          },
        ],
      };

      const chartConfig = {
        type: "bar",
        data: dataConfig,
      };
      res.json(chartConfig);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`The server is running on the localhost: ${port}`);
});
